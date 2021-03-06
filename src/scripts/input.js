
var pressedKeys = {};

var menuShown = true;
var currentMenu = "title";

function setKey(event, status) {
	
	let code = event.keyCode;
	let key;
	
	switch (code) {
		case 37:
			key = "LEFT";
			break;
		case 38:
			key = "UP";
			break;
		case 39:
			key = "RIGHT";
			break;
		case 40:
			key = "DOWN";
			break;
		case 27:
			key = "ESCAPE";
			break;
		default:
			key = String.fromCharCode(code);
	}
	
	pressedKeys[key] = status;
}

document.addEventListener("keydown", function(e) {
	setKey(e, true);
});

document.addEventListener("keyup", function(e) {
	setKey(e, false);
});

window.addEventListener("blur", function() {
	pressedKeys = {};
});

window.input = {
	isDown: function(key) {
		return pressedKeys[key.toUpperCase()];
	}
};

function handleMovementInput(player, dt) {
	
	player.moving = false;
	
	if ((input.isDown("DOWN") || input.isDown("s")) && !menuShown) {
		player.playFootStep();
		player.pos[1] += player.movementSpeed * dt;
		player.setFramesDir(0);
		player.moving = true;
	}
	
	if ((input.isDown("UP") || input.isDown("w")) && !menuShown) {
		player.playFootStep();
		player.pos[1] -= player.movementSpeed * dt;
		player.setFramesDir(2);
		player.moving = true;
	}
	
	if ((input.isDown("LEFT") || input.isDown("a")) && !menuShown) {
		player.playFootStep();
		player.pos[0] -= player.movementSpeed * dt;
		player.setFramesDir(3);
		player.moving = true;
	}
	
	if ((input.isDown("RIGHT") || input.isDown("d")) && !menuShown) {
		player.playFootStep();
		player.pos[0] += player.movementSpeed * dt;
		player.setFramesDir(1);
		player.moving = true;
	}

}

function itemPickUpInteraction(player, EKeySprite, map) {
	sounds.playSound("item_pick_up")
		
	let rawdata = fs.readFileSync("./removed_items.json");
	let data = JSON.parse(rawdata);
	
	// Get the actual item data using the collided object's stored item_id
	let item_id = current_item["item_id"];
	let item = map.items[item_id];
	
	// Item amount goes up by 0 + qty if its new or the previous value + qty
	let item_stock = player.inventory.get(item["item_name"]) || 0;
	player.inventory.set(item["item_name"], item_stock+current_item["item_qty"]);
	
	// Add picked up item to removed_items so it can't be picked up again
	data[map.map_name].push(item_id);
	fs.writeFileSync("./removed_items.json", JSON.stringify(data));
	
	// Removing all relevant item references tht still exist (collision object and sprite)
	map.item_boxes.splice(map.item_boxes.indexOf(current_item), 1);
	map.item_sprites.delete(item_id);
	current_item = null;
	
	updateInventoryMenu(player.inventory);
	
	EKeySprite.hide = true;
}

function npcSpeechInteraction(player, EKeySprite, map) {
	sounds.playSound("start_convo")
		
	menuShown = true;
	
	let npc_id = current_npc["npc_id"];
	let npc_name = map.npcs[npc_id]["npc_name"];
	let speech_id = current_npc["speech_id"];
	
	let rawdata = fs.readFileSync("./speech_counters.json");
	let data = JSON.parse(rawdata);
	
	// Get the next lines of dialogue of the current NPC
	let speech_counter = data[map.map_name][npc_id] || 0;
	
	// Get NPCs actual dialogue data
	rawdata = fs.readFileSync("./src/assets/maps/"+map.map_name+"_speech.json");
	data = JSON.parse(rawdata);
	let speech_data = data[speech_id][""+speech_counter];
	
	speech_counter = processSpeech(player, speech_data, speech_counter, npc_name, npc_id);
	
	rawdata = fs.readFileSync("./speech_counters.json");
	data = JSON.parse(rawdata);
	
	data[map.map_name][npc_id] = speech_counter;
	fs.writeFileSync("./speech_counters.json", JSON.stringify(data));
}

function playGameInteraction(player, EKeySprite, map) {
	
	menuShown = true;
	createMiniGameCanvas();
	
	switch (current_game["game_id"]) {
		case "0": // Spin the Wheel
			sounds.playBGSound("wheel_bg");
			spinTheWheelInit();
			break;
	}
}

function handleInteractionInput(player, EKeySprite, map) {
	
	// Open overlay and game menu
	if (input.isDown("ESCAPE") && !menuShown) {
		menuShown = true;
		currentMenu = "options";
		
		toggleMenus("block");
		document.getElementById("back-button").style.display = "none";
		document.getElementById("cross-button").style.display = "block";
		
	}
	
	// Pick up item that is currently in range
	if (input.isDown("e") && !menuShown && current_item != null) {
		itemPickUpInteraction(player, EKeySprite, map);
	}
	
	// Talk to npc that is currently in range
	if (input.isDown("e") && !menuShown && current_npc != null) {
		npcSpeechInteraction(player, EKeySprite, map);
	}
	
	// Start playing mini-game
	if (input.isDown("e") && !menuShown && current_game != null) {
		playGameInteraction(player, EKeySprite, map);
	}
}