

class Map {
	static width = 0;
	static height = 0;
	static background = null;
	static underlay = null;
	static overlay = null;
	static collision_boxes = [];
	
	// Read and return map data from json file
	static getJSONdata(filename) {
		var result = null;
		
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "./assets/maps/"+filename+".json", false);
		xmlhttp.send();
		
		if (xmlhttp.status==200) {
			result = xmlhttp.responseText;
		}
		
		return JSON.parse(result);
	}
	
	// Set map data
	static updateData(filename) {
		let data = Map.getJSONdata(filename);
		
		Map.width = data["map_width"];
		Map.height = data["map_height"];
		
		Map.background = data["background"];
		Map.underlay = data["underlay"];
		Map.overlay = data["overlay"];
		
		Map.collision_boxes = data["obstacles"]["collisions"];
	}
	
	static renderLayer(ctx, layer) {
		let image = "assets/images/"+layer["tileset"];
		
		let row = 0;
		let col = 0;
		
		while (row <= layer["height"]) {
			
			let tile = layer["data"][col];
			
			if (tile == -1) {
				continue;
			}
			
			ctx.drawImage(resources.get(image),
				tile[0]*32, tile[1]*32,
				32, 32,
				(col%layer["width"])*32, row*32,
				32, 32);
			
			col++;
			
			if (col % layer["width"] == 0) {
				row++;
			}
		}
		
	}
	
}