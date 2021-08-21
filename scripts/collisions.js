
function collides(x, y, r, b, x2, y2, r2, b2) {
	return !(r <= x2 || x > r2 || b <= y2 || y > b2); 
}

function boxesCollide(pos, size, pos2, size2) {
    return collides(pos[0], pos[1],
                    pos[0] + size[0], pos[1] + size[1],
                    pos2[0], pos2[1],
                    pos2[0] + size2[0], pos2[1] + size2[1]);
}

function checkCollisions(player, objects, multiple) {
	let object;
	let collided = false;
	let collided_objects = [];
	
	for (let i=0; i<objects.length; i++) {
		object = objects[i];
		collided = boxesCollide(player.pos, player.size,
								[object["x"], object["y"]],
								[object["width"], object["height"]]);
		if (collided) {
			collided_objects.push(object);
			if (!multiple) {
				break;
			}
		}
	}
	
	if (multiple) {
		return collided_objects;
	} else {
		return collided_objects[0];
	}
}


// For checking obstacle layer collisions

function checkObstacleCollisions(player) {
	let collided_obstacles = checkCollisions(player, map.collision_boxes, true);
	
	if (collided_obstacles.length > 0) {
		for (let i=0; i<collided_obstacles.length; i++) {
			preventPassage(player, collided_obstacles[i]);
		}
	}
	
}

function preventPassage(player, object) {
	
	let playerRight = player.pos[0]+player.size[0];
	let playerBottom = player.pos[1]+player.size[1];
	let objectRight = object["x"]+object["width"];
	let objectBottom = object["y"]+object["height"];
	
	let collision_tolerance = 10;
	
	if (Math.abs(player.pos[1] - objectBottom) < collision_tolerance) {
		player.pos[1] += Math.abs(player.pos[1] - objectBottom); 
	}
	if (Math.abs(object["y"] - playerBottom) < collision_tolerance) {
		player.pos[1] -= Math.abs(object["y"] - playerBottom);
	}
	if (Math.abs(player.pos[0] - objectRight) < collision_tolerance) {
		player.pos[0] += Math.abs(player.pos[0] - objectRight)
	}
	if (Math.abs(object["x"] - playerRight) < collision_tolerance) {
		player.pos[0] -= Math.abs(object["x"] - playerRight)
	}
	
}

// For checking collision with doors (to change maps)

function checkDoorCollisions(player) {
	let collided_door = checkCollisions(player, map.doors, false);
	
	if (collided_door) {
		map.updateData(collided_door["map_name"]);
		map.createItemSprites();
		map.createNPCSprites();
		player.pos[0] = collided_door["start_col"]*32;
		player.pos[1] = collided_door["start_row"]*32;
	}
}


// Check whether you are in range to pick up an item

var current_item = null;

function checkItemCollisions(player, EKeySprite) {
	let collided_item = checkCollisions(player, map.item_boxes, false);
	
	if (collided_item) {
		EKeySprite.hide = false;
		current_item = collided_item;
	} else {
		EKeySprite.hide = true;
		current_item = null;
	}
	
	return collided_item;
}

// Check whether you are in range to talk to an NPC

var current_npc = null;

function checkNPCCollisions(player, EKeySprite) {
	let collided_npc = checkCollisions(player, map.npc_boxes, false);
	
	if (collided_npc && !menuShown) {
		EKeySprite.hide = false;
		current_npc = collided_npc;
	} else {
		EKeySprite.hide = true;
		current_npc = null;
	}
	
	return collided_npc;
}