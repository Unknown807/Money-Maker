

// Create the canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 640;
canvas.height = 512;

document.body.appendChild(canvas);

// The game loop

var lastTime;

// The player

/*
var player = {
	pos: [0, 0],
	sprite: new PlayerSprite("assets/images/players.png", [0, 32], [32, 32], 3, [[0,1,2], [3,4,5], [6,7,8], [9,10,11]])
}*/

var player = new PlayerSprite("assets/images/players.png", [0, 0], [0, 32], [32, 32], 3, [[0,1,2], [3,4,5], [6,7,8], [9,10,11]])

resources.load([
	"assets/images/interiors.png",
	"assets/images/interiors_floors_walls.png",
	"assets/images/players.png",
]);

resources.onReady(init);

function main() {
	let now = Date.now();
	let dt = (now - lastTime) / 1000.0;
	
	update(dt);
	render();
	
	lastTime = now;
	requestAnimFrame(main); 
}

function init() {
	Map.updateData("testmap2");
	
	lastTime = Date.now();
	main();
}

function update(dt) {
	
	player.handleInput(dt);
	updateEntities(dt);
}

function updateEntities(dt) {
	player.update(dt);
}

function render() {
	//ctx.drawImage(resources.get("assets/maps/"+Map.image), 0, 0);
	
	Camera.render(ctx, canvas.width, canvas.height, player);
	
	Map.renderLayer(ctx, Map.background);
	Map.renderLayer(ctx, Map.underlay);
	
	renderEntity(player);
	
	Map.renderLayer(ctx, Map.overlay);
}

function renderEntities() {

}

function renderEntity(entity) {
	ctx.save();
    ctx.translate(entity.pos[0], entity.pos[1]);
    entity.render(ctx);
    ctx.restore();
}