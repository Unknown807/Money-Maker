

// Create the canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 640;
canvas.height = 360;

document.body.appendChild(canvas);


// The game loop

var lastTime;

function main() {
	let now = Date.now();
	let dt = (now - lastTime) / 1000.0;
	
	lastTime = now;
	requestAnimFrame(main); 
}

function init() {
	main();
}