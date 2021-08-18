// Create the canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 640;
canvas.height = 512;

document.body.appendChild(canvas);

// Entities

var map = new Map();
var camera = new Camera();
var player = new PlayerSprite("assets/images/players.png", [50, canvas.height/2], [0, 32], [32, 32], 6, [[0,1,2], [3,4,5], [6,7,8], [9,10,11]])

resources.load([
	"assets/images/interiors.png",
	"assets/images/interiors_floors_walls.png",
	"assets/images/players.png",
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
	map.updateData("testmap2");
	
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
	handleInteractionInput(player);
	
	updateEntities(dt);
	
	checkObstacleCollisions(player);
}

function updateEntities(dt) {
	player.update(dt);
}

function render() {
	camera.render(ctx, canvas.width, canvas.height, player);
	
	map.renderLayer(ctx, map.background);
	map.renderLayer(ctx, map.underlay);
	
	renderEntity(player);
	
	map.renderLayer(ctx, map.overlay);
}

function renderEntities() {

}

function renderEntity(entity) {
	ctx.save();
    ctx.translate(entity.pos[0], entity.pos[1]);
    entity.render(ctx);
    ctx.restore();
}