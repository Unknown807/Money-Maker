import json
from PIL import Image

filename = "testmap"

with open(filename+".json") as infile:
    data = json.load(infile)

fgids = {}

new_map = {
    "collision_objects": []
}

image_filename = input("Enter map name (+ extension): ")

new_map["image"] = image_filename

img = Image.open(image_filename)
width, height = img.size

new_map["width"] = width
new_map["height"] = height

for layer in data["layers"]:
    layer_data = layer.get("data", None)
    
    # Only handle collision layer
    if layer_data is None:

        for obj in layer["objects"]:
            new_map["collision_objects"].append({
                "x": obj["x"],
                "y": obj["y"],
                "width": obj["width"],
                "height": obj["height"]
            })
    
# save new map

with open(filename+"_new.json", "w") as outfile:
    json.dump(new_map, outfile)
    
