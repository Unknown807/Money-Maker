

// Create the canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 640;
canvas.height = 512;

document.body.appendChild(canvas);

// The game loop

var lastTime;

// The current map and it's properties

function main() {
	let now = Date.now();
	let dt = (now - lastTime) / 1000.0;
	
	render();
	
	lastTime = now;
	requestAnimFrame(main); 
}

function init() {
	main();
}

resources.load([
	"assets/images/interiors.png",
	"assets/images/interiors_floors_walls.png",
	"assets/maps/testmap.png",
]);

resources.onReady(init);

function render() {
	ctx.drawImage(resources.get("assets/maps/testmap.png"), 0, 0);
}