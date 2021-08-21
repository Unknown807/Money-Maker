
var currentLineIndex = 0;
var currentLines = [];
var currentNPCName = "";
var maxLines = 0;

function displaySpeech() {	
	let container = document.getElementById("speech-text-display")
	let current_speaker = currentLines[currentLineIndex][0] == "player" ? "YOU" : currentNPCName.toUpperCase();
	container.textContent = current_speaker+": "+currentLines[currentLineIndex][1];
	
	currentLineIndex++;
}

function processSpeech(inventory, speech_data, npc_name, npc_id) {
	// Show speech menu
	let menu = document.getElementById("speech-menu");
	menu.style.display = "block";
	
	let nextIncrement = false;
	maxLines = speech_data["lines"].length;
	currentNPCName = npc_name;
	
	if (speech_data["item"] == 0) { // No item, but dialogue, increment counter
		currentLines = speech_data["lines"];
	} else if (speech_data["item"] == -1) { //No item, final dialogue, don't increment counter
		currentLines = speech_data["lines"];
	} else { // Item, found/missing dialogue, increment counter when item found
		
		let found = "missing";
		for (let [key, value] of inventory.entries()) {
			if (key.includes(speech_data["item"]) && value >= speech_data["qty"]) {
				found = "found";
				break;
			}
		};
		
		maxLines = speech_data[found].length;
		currentLines = speech_data[found];
	}
	
	displaySpeech();
}

document.getElementById("speech-menu").addEventListener("click", function() {
	// End speech if reached end
	if (currentLineIndex >= maxLines) {
		console.log("End of Convo");
		return
	}
	
	displaySpeech();
});