
const fs = require("fs");

class GameMap {
	constructor() {
		this.map_name = "";
		this.width = 0;
		this.height = 0;
		
		this.background = null;
		this.underlay = null;
		this.overlay = null;
		
		this.collision_boxes = [];
		this.doors = [];
		this.item_boxes = [];
		this.items = null;
		this.item_sprites = new Map();
		
	}
	
	// Set map data
	updateData(filename) {
		let rawdata = fs.readFileSync("./assets/maps/"+filename+".json");
		let data = JSON.parse(rawdata);
		
		this.map_name = data["map_name"];
		this.width = data["map_width"];
		this.height = data["map_height"];
		
		this.background = data["background"];
		this.underlay = data["underlay"];
		this.overlay = data["overlay"];
		
		this.collision_boxes = data["obstacles"]["data"];
		this.doors = data["doors"]["data"];
		this.item_boxes	= data["items"]["data"];
		
		rawdata = fs.readFileSync("./assets/maps/"+filename+"_items.json");
		data = JSON.parse(rawdata);
		
		this.items = data;
	}
	
	createItemSprites() {
		let object, item;
		for (let i=0; i<this.item_boxes.length; i++) {
			object = this.item_boxes[i];
			item = this.items[object["item_id"]];
			
			let item_sprite = new Sprite("assets/images/"+item["tileset"],
										[item["item_col"]*32, item["item_row"]*32],
										[item["tile_col"]*32, item["tile_row"]*32],
										[32, 32]);
			
			this.item_sprites.set(object["item_id"], item_sprite);
		}
	}
	
	renderLayer(ctx, layer) {
		let image = "assets/images/"+layer["tileset"];
		
		for (let i=0; i<layer["data"].length; i++) {
			let tile = layer["data"][i];
			
			ctx.drawImage(resources.get(image),
				tile[2], tile[3],
				32, 32,
				tile[0]*32, tile[1]*32,
				32, 32);
		}
	}
}