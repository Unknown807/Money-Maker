const { webFrame } = require("electron");
const fs = require("fs");

var minigame_canvas, minigame_ctx;

function createMiniGameCanvas() {
	minigame_canvas = document.createElement("canvas");
	minigame_canvas.setAttribute("id", "minigame-canvas")
	minigame_ctx = minigame_canvas.getContext("2d");

	minigame_canvas.width = 640;
	minigame_canvas.height = 512;

	document.body.appendChild(minigame_canvas);
}

var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

function clamp(value, min, max){
    if(value < min) return min;
    else if(value > max) return max;
    return value;
}