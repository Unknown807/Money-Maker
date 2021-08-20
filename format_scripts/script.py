import json
from PIL import Image
import pytmx

filename = "map3"

data = pytmx.TiledMap(filename+".tmx")

new_map = {
    "map_width": data.width,
    "map_height": data.height
}   

for layer in data.visible_layers:

    new_layer = {}
    data = []
    
    if hasattr(layer, "tiles"):
        tiles = layer.tiles()

        for tile in tiles:
            new_layer["tileset"] = tile[2][0]
            data.append([tile[0], tile[1], tile[2][1][0], tile[2][1][1], tile[2][1][2], tile[2][1][3]])

    else:

        if layer.name == "obstacles":
            while True:
                try:
                    node = layer.pop()

                    data.append({
                        "x": node.x,
                        "y": node.y,
                        "width": node.width,
                        "height": node.height
                    })
                except IndexError:
                    break
        elif layer.name == "doors":
            while True:
                try:
                    node = layer.pop()

                    data.append({
                        "x": node.x,
                        "y": node.y,
                        "width": node.width,
                        "height": node.height,
                        "map_name": node.map_name,
                        "row": node.row,
                        "col": node.col
                    })
                except IndexError:
                    break
        
    new_layer["data"] = data
    new_map[layer.name] = new_layer

with open(filename+".json", "w") as outfile:
    json.dump(new_map, outfile)
