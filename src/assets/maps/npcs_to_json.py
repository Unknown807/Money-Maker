import json

map_name = "main_island_temple_1"

items = [
    { # Gray Ram looking right - 0
	"npc_name": "Temple Monk",
	"tileset": "npcs1.png",
	"tile_row": 16,
	"tile_col": 12,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
    { # Yellow Elephant looking down - 0
	"npc_name": "Sculpter",
	"tileset": "npcs1.png",
	"tile_row": 13,
	"tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
    { # Dark Blue Rabbit looking down and up - 0
	"npc_name": "Cook",
	"tileset": "npcs1.png",
	"tile_row": 1,
	"tile_col": 8,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,2],
        "anim_dir": "horizontal",
        "anim_speed": 2
    }
]

items_formatted = {}

for i, item in enumerate(items):
    items_formatted[str(i)] = item

with open(map_name+"_npcs.json", "w") as outfile:
    json.dump(items_formatted, outfile)
