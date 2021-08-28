
document.getElementById("bg-sound-slider").addEventListener("click", function() {
	sounds.playSound("menu_click");
});

document.getElementById("general-sound-slider").addEventListener("click", function() {
	sounds.playSound("menu_click");
});

document.getElementById("zoom-select").addEventListener("click", function() {
	sounds.playSound("menu_click");
});

document.getElementById("bg-sound-slider").addEventListener("input", function(event) {
	let newVolume = event.target.value/100;
	sounds.setBGSoundVolume(newVolume);
});

document.getElementById("general-sound-slider").addEventListener("input", function(event) {
	let newVolume = event.target.value/100;
	sounds.setSoundVolume(newVolume);
});

document.getElementById("zoom-select").addEventListener("change", function(event) {
	let newZoom = parseFloat(event.target.value);
	webFrame.setZoomLevel(newZoom);
});