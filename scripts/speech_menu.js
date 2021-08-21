
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

function processSpeech(player, speech_data, speech_counter, npc_name, npc_id) {
	// Show speech menu
	document.getElementById("speech-menu").style.display = "block";
	currentLineIndex = 0;
	currentNPCName = npc_name;
	
	if (speech_data["item"] == 0) { // No item, but dialogue, increment counter
		
		maxLines = speech_data["lines"].length;
		currentLines = speech_data["lines"];
		speech_counter++;
		
	} else if (speech_data["item"] == -1) { //No item, final dialogue, don't increment counter
		
		maxLines = speech_data["lines"].length;
		currentLines = speech_data["lines"];		
		
	} else { // Item, found/missing dialogue, increment counter when item found
		
		let found = false;
		for (let [key, value] of player.inventory.entries()) {
			if (key.includes(speech_data["item"]) && value >= speech_data["qty"]) {
				found = key;
				break;
			}
		};
		
		if (found) {
			maxLines = speech_data["found"].length;
			currentLines = speech_data["found"];
			speech_counter++;
			
			// Let the user keep the quest item or not, and update inventory
			if (!speech_data["keep"]) {
				let nqty = player.inventory.get(found)-speech_data["qty"];
				if (nqty > 0) {
					player.inventory.set(found, nqty);
				} else {
					player.inventory.delete(found);
				}
				updateInventoryMenu(player.inventory);
			}
		} else {
			maxLines = speech_data["missing"].length;
			currentLines = speech_data["missing"];
		}
		
	}
	
	// Does talking give any item reward?
	if (speech_data["reward"]) {
		let item_stock = player.inventory.get(speech_data["reward"][0]) || 0;
		player.inventory.set(speech_data["reward"][0], item_stock+speech_data["reward"][1]);
		updateInventoryMenu(player.inventory);
	}
	
	displaySpeech();
	
	return speech_counter;
}

document.getElementById("speech-menu").addEventListener("click", function() {
	// End speech if reached end
	if (currentLineIndex >= maxLines) {
		document.getElementById("speech-menu").style.display = "none";
		menuShown = false;
		return
	}
	
	displaySpeech();
});