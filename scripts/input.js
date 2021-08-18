
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
		player.pos[1] += player.movementSpeed * dt;
		player.setFramesDir(0);
		player.moving = true;
	}
	
	if ((input.isDown("UP") || input.isDown("w")) && !menuShown) {
		player.pos[1] -= player.movementSpeed * dt;
		player.setFramesDir(2);
		player.moving = true;
	}
	
	if ((input.isDown("LEFT") || input.isDown("a")) && !menuShown) {
		player.pos[0] -= player.movementSpeed * dt;
		player.setFramesDir(3);
		player.moving = true;
	}
	
	if ((input.isDown("RIGHT") || input.isDown("d")) && !menuShown) {
		player.pos[0] += player.movementSpeed * dt;
		player.setFramesDir(1);
		player.moving = true;
	}

}

function handleInteractionInput(player) {
	
	// Open overlay and game menu
	if (input.isDown("ESCAPE") && !menuShown) {
		menuShown = true;
		currentMenu = "options";
		
		toggleMenus("block");
		document.getElementById("back-button").style.display = "none";
		document.getElementById("cross-button").style.display = "block";
		
	}
}