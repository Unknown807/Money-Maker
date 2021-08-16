import json
from PIL import Image

filename = "testmap"

with open(filename+".json") as infile:
    data = json.load(infile)

#layers should be renamed with a concatenation of _ and the first letters of each
# _ seperated word in the tileset file

fgids = {}

new_map = {
    "map_height": data["height"],
    "map_width": data["width"],
    "layers": []
}

for fgid in data["tilesets"]:
    key = fgid["source"].split("/")[-1]
    
    image_filename = key.replace(".tsx", "")+".png"
    img = Image.open(image_filename)
    width, height = img.size
    
    key = key.split("_")[:2]
    key = (key[0][0]+key[1][0]).lower()

    fgids[key] = (fgid["firstgid"], width//32, height//32, image_filename) # width and height as number of tile rows and columns

for layer in data["layers"]:

    new_layer = {}
    
    layer_data = layer.get("data", None)

    # handle collision layer
    if layer_data is None:

        new_layer["collisions"] = []

        for obj in layer["objects"]:
            new_layer["collisions"].append({
                "x": obj["x"],
                "y": obj["y"],
                "width": obj["width"],
                "height": obj["height"]
            })
        
    else:
        layer_type = layer["name"].split("_")[-1]
        
        new_layer["width"] = fgids[layer_type][1]
        new_layer["height"] = fgids[layer_type][2]

        new_data = []
        for tile_num in layer_data:
            tile_id = tile_num-fgids[layer_type][0]

            if tile_id < 0:
                new_data.append(-1)
                continue

            count = 0
            for col in range(new_layer["width"]):
                for row in range(new_layer["height"]):
                    
                    if count == tile_id:
                        new_data.append([col, row])

                    count+=1
                    
        new_layer["data"] = new_data
        new_layer["tileset"] = fgids[layer_type][3]
        
    new_layer["id"] = layer["id"]
    new_map["layers"].append(new_layer)

# save new map

with open(filename+"_new.json", "w") as outfile:
    json.dump(new_map, outfile)
    
