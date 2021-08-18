
const fs = require("fs");

class Map {
	constructor() {
		this.width = 0;
		this.height = 0;
		this.background = null;
		this.underlay = null;
		this.overlay = null;
		this.collision_boxes = [];
	}
	
	// Set map data
	updateData(filename) {
		let rawdata = fs.readFileSync("./assets/maps/"+filename+".json");
		let data = JSON.parse(rawdata);
		
		this.width = data["map_width"];
		this.height = data["map_height"];
		
		this.background = data["background"];
		this.underlay = data["underlay"];
		this.overlay = data["overlay"];
		
		this.collision_boxes = data["obstacles"]["data"];
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