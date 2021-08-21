
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
		
		this.npc_boxes = [];
		this.npcs = null;
		this.npc_sprites = new Map();
		
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
		this.npc_boxes = data["npcs"]["data"];
		this.item_sprites = new Map();
		this.npc_sprites = new Map();
		// Some rooms don't have any npcs so there is no corresponding npcs json file for the map
		
		if (this.npc_boxes.length > 0) {
			rawdata = fs.readFileSync("./assets/maps/"+filename+"_npcs.json");
			data = JSON.parse(rawdata);
			this.npcs = data;
		}
		
		// Remove already picked up items
		
		rawdata = fs.readFileSync("./removed_items.json");
		data = JSON.parse(rawdata);
		
		let box;
		for (let i=0; i<this.item_boxes.length; i++) {
			box = this.item_boxes[i];
			
			if (data[this.map_name].includes(box["item_id"])) {
				this.item_boxes.splice(i, 1);
				i--;
			}
		}
		
		// Some rooms don't have any items so there is no corresponding items json file for the map
		
		if (this.item_boxes.length > 0) {
			rawdata = fs.readFileSync("./assets/maps/"+filename+"_items.json");
			data = JSON.parse(rawdata);
			this.items = data;
		}
	}
	
	createItemSprites() {
		let object, item, item_sprite;
		for (let i=0; i<this.item_boxes.length; i++) {
			object = this.item_boxes[i];
			item = this.items[object["item_id"]];
			
			item_sprite = new Sprite("assets/images/"+item["tileset"],
									[item["item_col"]*32, item["item_row"]*32],
									[item["tile_col"]*32, item["tile_row"]*32],
									[32, 32]);
			
			
			item_sprite.moving = true;
			this.item_sprites.set(object["item_id"], item_sprite);
		}
	}
	
	createNPCSprites() {
		let object, npc, npc_sprite;
		for (let i=0; i<this.npc_boxes.length; i++) {
			object = this.npc_boxes[i];
			npc = this.npcs[object["npc_id"]];
			
			npc_sprite = new Sprite("assets/images/"+npc["tileset"],
									[npc["npc_col"]*32, npc["npc_row"]*32],
									[npc["tile_col"]*32, npc["tile_row"]*32],
									[32, 32],
									npc["anim_speed"],
									[npc["anim_frames"],],
									npc["anim_dir"]);
			
			npc_sprite.moving = true;
			this.npc_sprites.set(object["npc_id"], npc_sprite);
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