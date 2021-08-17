

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
		
		Map.collision_boxes = data["obstacles"]["data"];
	}
	
	static renderLayer(ctx, layer) {
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