
// Create the canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 640;
canvas.height = 512;

document.body.appendChild(canvas);

// Entities

var map = new GameMap();
var camera = new Camera();
var player = new PlayerSprite("assets/images/players.png", [50, canvas.height/2], [0, 32], [32, 32], 6, [[0,1,2], [3,4,5], [6,7,8], [9,10,11]])
var EKeySprite = new Sprite("assets/images/ekeys.png", [0,0], [0, 0], [32, 32], 1, [[0,1],]);
EKeySprite.hide = true;
EKeySprite.moving = true;

resources.load([
	"assets/images/interiors.png",
	"assets/images/interiors_floors_walls.png",
	"assets/images/players.png",
	"assets/images/ekeys.png",
]);

resources.onReady(init);

// The game loop

var lastTime;

function main() {
	let now = Date.now();
	let dt = (now - lastTime) / 1000.0;
	
	update(dt);
	render();
	
	lastTime = now;
	requestAnimFrame(main);
}

function init() {
	try {
		fs.writeFileSync("removed_items.json", JSON.stringify({
			"map1": [],
			"map2": [],
			"map3": [],
		}));
	} catch (err) {
		console.error(err);
	}
	
	map.updateData("map1");
	map.createItemSprites();
	lastTime = Date.now();
	
	// Show title screen first
	document.getElementById("menu-area").style.backgroundImage = "url("+"'./assets/images/title_bg.png'"+")";
	document.getElementById("back-button").style.display = "none";
	document.getElementById("cross-button").style.display = "none";
	toggleMenus("block");
	
	main();
}

function update(dt) {
	handleMovementInput(player, dt);
	handleInteractionInput(player, EKeySprite, map);
	
	player.update(dt);
	
	EKeySprite.pos = [player.pos[0], player.pos[1]-32];
	EKeySprite.update(dt);
	
	updateEntities(dt, map.item_sprites);
	
	checkObstacleCollisions(player);
	checkDoorCollisions(player);
	checkItemCollisions(player, EKeySprite);
}

function updateEntities(dt, entities) {
	entities.forEach((entity) => entity.update(dt));
}

function render() {
	camera.render(ctx, canvas.width, canvas.height, player);
	
	map.renderLayer(ctx, map.background);
	map.renderLayer(ctx, map.underlay);
	
	renderEntities(map.item_sprites);
	renderEntity(player);
	renderEntity(EKeySprite);
	
	map.renderLayer(ctx, map.overlay);
}

function renderEntities(entities) {
	entities.forEach(renderEntity);
}

function renderEntity(entity) {
	ctx.save();
    ctx.translate(entity.pos[0], entity.pos[1]);
    entity.render(ctx);
    ctx.restore();
}