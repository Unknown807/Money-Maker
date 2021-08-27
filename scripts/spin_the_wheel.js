
var numsOneToFifty = [];
var numsOneToTwelve = [];

var currentWheelNumbers;
var currentWheelNumCount = -1;

var wheelText = "First 5 then 2! Click to spin!"
var numWheel;

var wheelSpinning = false;

function nextWheelSpin() {
	if (!wheelSpinning) {
			wheelSpinning = true;
			
			if (currentWheelNumCount == 6) {
				minigame_ctx.clearRect(0,0,minigame_canvas.width,minigame_canvas.height);
				
				document.body.removeChild(minigame_canvas);
				minigame_canvas = null;
				minigame_ctx = null;
				menuShown = false;
				wheelSpinning = false;
				currentWheelNumCount = -1;
				wheelText = "First 5 then 2! Click to spin!";
				
				document.body.removeEventListener("click", nextWheelSpin, false);
				sounds.playBGSound("temple_bg");
				return;
			}
			
			currentWheelNumCount++;
			sounds.playSound("sparkle");
			
			numWheel.stopAnimation(false);
			numWheel.rotationAngle = 0;
			numWheel.draw();
			
			numWheel.startAnimation();
	}
}

function spinTheWheelInit() {
	document.body.addEventListener("click", nextWheelSpin);
	
	currentWheelNumbers = numsOneToFifty;
	createWheel();
}

function numberChosenByWheel() {
	let result = numWheel.getIndicatedSegment();
	let ball_qty, to_remove_index;
	
	for (let i=0; i<currentWheelNumbers.length; i++) {
		if (currentWheelNumbers[i]["text"] === result["text"]) {
			to_remove_index = i;
		}
	}
	
	wheelText = "You got lucky "+result["text"]+"! Click to spin!";
	wheelSpinning = false;
	sounds.playSound("small_victory");
	
	currentWheelNumbers.splice(to_remove_index, 1);
	
	if (currentWheelNumCount <= 4) {
		ball_qty = player.inventory.get("main ball "+result["text"]) || 0;
		player.inventory.set("main ball "+result["text"], ball_qty+1);
	} else if (currentWheelNumCount > 4) {
		if (currentWheelNumCount == 6) {
			wheelText = "You got lucky "+result["text"]+"! Click to exit";
		}
		ball_qty = player.inventory.get("bonus ball "+result["text"]) || 0;
		player.inventory.set("bonus ball "+result["text"], ball_qty+1);
	}
	
	if (currentWheelNumCount == 4) {
		currentWheelNumbers = numsOneToTwelve; // Only set once otherwise all removed nums are reset
	}
	
	drawWheelUI()
	
	updateInventoryMenu(player.inventory);
	createWheel();
}

function createWheel() {
	numWheel = new Winwheel({
				"canvasId"		  : "minigame-canvas",
				"centerY"		  : minigame_canvas.height/2 + 20,
                "outerRadius"     : 170,        // Set outer radius so wheel fits inside the background.
                "innerRadius"     : 0,         // Make wheel hollow so segments dont go all way to center.
                "textFontSize"    : 12,         // Set default font size for the segments.
                "textOrientation" : "vertical", // Make text vertial so goes down from the outside of wheel.
                "textAlignment"   : "outer",    // Align text to outside of wheel.
                "numSegments"     : currentWheelNumbers.length,         // Specify number of segments.
                "segments"        : currentWheelNumbers,           // Define segments including colour and text.
                /*[                               // font size and text colour overridden on backrupt segments.
                   {"fillStyle" : "#000000", "text" : "BANKRUPT", "textFontSize" : 16, "textFillStyle" : "#ffffff"},

                ],*/
                "animation" :           // Specify the an imation to use.
                {
                    "type"     : "spinToStop",
                    "duration" : 10,
                    "spins"    : 3,
                    "callbackFinished" : "numberChosenByWheel()",  // Function to call whent the spinning has stopped.
                },
                "pins" :                // Turn pins on.
                {
                    "number"     : currentWheelNumbers.length,
                    "fillStyle"  : "gold",
                    "outerRadius": 3,
                }
    });
	
	drawWheelUI();
	
}

function drawWheelUI() {
	// Draw triangle pointing at chosen numbers
	let canvasWidthMidpoint = minigame_canvas.width/2;
	let canvasHeightMidpoint = minigame_canvas.height/2;
	
	minigame_ctx.fillStyle = "yellow";
	minigame_ctx.beginPath();
	minigame_ctx.moveTo(canvasWidthMidpoint, canvasHeightMidpoint-150);
	minigame_ctx.lineTo( (canvasWidthMidpoint) - 50, canvasHeightMidpoint-175);
	minigame_ctx.lineTo( (canvasWidthMidpoint) + 50, canvasHeightMidpoint-175);
	minigame_ctx.fill();
	
	minigame_ctx.font = "30px merienda";
	minigame_ctx.fillText(wheelText, canvasWidthMidpoint - (minigame_ctx.measureText(wheelText).width/2), 50);
}

// Returns depending on segment background colour whether text colour should be black or white
function determineTextColourContrast(rgb) {
	if (rgb[0]*0.299 + rgb[1]*0.587 + rgb[2]*0.114 > 186) {
		return "#000000";
	}
	
	return "#ffffff";
}

// Returns rgb array
function generateRandomColour() {
	return [
		Math.floor(Math.random()*255),
		Math.floor(Math.random()*255),
		Math.floor(Math.random()*255)
	];
}

for (let i=0; i<50; i++) {
	let rgb = generateRandomColour();
	let contrast = determineTextColourContrast(rgb);
	let segment = {
		"fillStyle": "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")",
		"textFillStyle": contrast,
		"text": ""+(i+1)
	};
	
	numsOneToFifty.push(segment);
}

for (let i=0; i<12; i++) {
	let rgb = generateRandomColour();
	let contrast = determineTextColourContrast(rgb);
	let segment = {
		"fillStyle": "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")",
		"textFillStyle": contrast,
		"text": ""+(i+1)
	};
	
	numsOneToTwelve.push(segment);
}