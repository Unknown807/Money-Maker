
function updateInventoryMenu(inventory) {	
	let container = document.getElementById("inventory-menu");
	
	// Clearing previous items
	while (container.firstChild) {
		container.removeChild(container.lastChild);
	}
	
	// Adding new items
	let newItem;
	
	if (inventory.size > 0) {
		
		let itemName, itemStock;
		inventory.forEach( (value, key) => {
			newItem = document.createElement("div");
			newItem.setAttribute("class", "inventory-item");
			
			itemName = document.createElement("h2");
			itemStock = document.createElement("h3");
			
			itemName.textContent = key;
			itemStock.textContent = "x"+value;
			
			newItem.appendChild(itemName);
			newItem.appendChild(itemStock);
			container.appendChild(newItem);
		});
		
	} else {
		newItem = document.createElement("h1");
		newItem.setAttribute("class", "menu-label");
		newItem.textContent = "No Items";
		container.appendChild(newItem);
	}
}