
function toggleMenus(display) {
	document.getElementById("game-overlay").style.display = display;
	document.getElementById("menu-area").style.display = display;
	document.getElementById(currentMenu+"-menu").style.display = display;
}

function gotoMenu() {
	document.getElementById("options-menu").style.display = "none";
	document.getElementById("back-button").style.display = "block";
	document.getElementById(currentMenu+"-menu").style.display = "block";
}

// Close from whatever menu you're on
document.getElementById("cross-button").addEventListener("click", function() {
	sounds.playSound("menu_click");
	toggleMenus("none");
	menuShown = false;
});

document.getElementById("inventory-button").addEventListener("click", function() {
	sounds.playSound("menu_click");
	currentMenu = "inventory";
	gotoMenu();
});

document.getElementById("settings-button").addEventListener("click", function() {
	sounds.playSound("menu_click");
	currentMenu = "settings";
	gotoMenu();
});

document.getElementById("credits-button").addEventListener("click", function() {
	sounds.playSound("menu_click");
	currentMenu = "credits";
	gotoMenu();
});

//Go back to options menu
document.getElementById("back-button").addEventListener("click", function() {
	sounds.playSound("menu_click");
	document.getElementById(currentMenu+"-menu").style.display = "none";
	document.getElementById("options-menu").style.display = "block";
	document.getElementById("back-button").style.display = "none";
	currentMenu = "options";
});

document.getElementById("play-button").addEventListener("click", function() {
	sounds.playSound("menu_click");
	toggleMenus("none");
	menuShown = false;
	
	document.getElementById("menu-area").style.backgroundImage = "url("+"'./assets/images/menu_bg.jpg'"+")";
});