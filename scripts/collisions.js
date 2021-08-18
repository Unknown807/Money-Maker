
function collides(x, y, r, b, x2, y2, r2, b2) {
	return !(r <= x2 || x > r2 || b <= y2 || y > b2); 
}

function boxesCollide(pos, size, pos2, size2) {
    return collides(pos[0], pos[1],
                    pos[0] + size[0], pos[1] + size[1],
                    pos2[0], pos2[1],
                    pos2[0] + size2[0], pos2[1] + size2[1]);
}

/*
function checkCollisions(player, objects) {
	let collided = false;
	
	for (let i=0; i<objects.length; i++) {
		let object = objects[i];
		collided = boxesCollide(player.pos, player.size,
								[object["x"], object["y"]],
								[object["width"], object["height"]]);
		if (collided) {
			collided = object;
			break;
		}
	}
	
	return collided;
}
*/

function checkObstacleCollisions(player) {
	let collided = false;
	let collided_obstacles = [];
	
	for (let i=0; i<map.collision_boxes.length; i++) {
		let object = map.collision_boxes[i];
		
		collided = boxesCollide(player.pos, player.size,
								[object["x"], object["y"]],
								[object["width"], object["height"]]);
								
		if (collided) {
			collided_obstacles.push(object);
		}
	}
	
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