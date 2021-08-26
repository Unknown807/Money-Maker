import json
import pytmx

filename = "main_island_temple_1"
bg_sound = "temple_bg" # + extensions
footstep_sound = "footstep_wood"

data = pytmx.TiledMap(filename+".tmx")

new_map = {
    "map_name": filename,
    "map_width": data.width,
    "map_height": data.height,
    "bg_sound": bg_sound,
    "footstep_sound": footstep_sound
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
                        "start_row": node.row,
                        "start_col": node.col
                    })
                except IndexError:
                    break
        elif layer.name == "items":
            while True:
                try:
                    node = layer.pop()

                    data.append({
                        "x": node.x,
                        "y": node.y,
                        "width": node.width,
                        "height": node.height,
                        "item_id": node.item_id,
                        "item_qty": node.item_qty,
                        "row": node.item_row,
                        "col": node.item_col,
                    })
                except IndexError:
                    break
        elif layer.name == "npcs":
            while True:
                try:
                    node = layer.pop()

                    data.append({
                        "x": node.x,
                        "y": node.y,
                        "width": node.width,
                        "height": node.height,
                        "npc_id": node.npc_id,
                        "speech_id": node.speech_id,
                        "row": node.npc_row,
                        "col": node.npc_col,
                    })
                except IndexError:
                    break
        elif layer.name == "animated_tiles":
            while True:
                try:
                    node = layer.pop()

                    data.append({
                        "x": node.x,
                        "y": node.y,
                        "width": node.width,
                        "height": node.height,
                        "animated_tile_id": node.animated_tile_id,
                    })
                except IndexError:
                    break
        
    new_layer["data"] = data
    new_map[layer.name] = new_layer

with open(filename+".json", "w") as outfile:
    json.dump(new_map, outfile)
