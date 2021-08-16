

class Map {
	static width = 0;
	static height = 0;
	static image = null;
	static collision_boxes = [];
	
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
	
	static updateData(filename) {
		let data = Map.getJSONdata(filename);
		
		Map.width = data["width"];
		Map.height = data["height"];
		Map.image = data["image"];
		Map.collision_boxes = data["collision_boxes"];
	}
}