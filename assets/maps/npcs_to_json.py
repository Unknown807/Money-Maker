import json

map_name = "main_island_town_1"

items = [
    { # Green Ram looking right - 0
	"npc_name": "Tourist",
	"tileset": "npcs1.png",
	"tile_row": 16,
	"tile_col": 4,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
    { # Blue cat looking right - 1
	"npc_name": "Farmer",
	"tileset": "npcs1.png",
	"tile_row": 2,
	"tile_col": 12,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
    { # Dark rabbit looking down - 2
	"npc_name": "Black Team Member",
	"tileset": "npcs1.png",
	"tile_row": 10,
	"tile_col": 8,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
    { # Purple elephant looking down - 3
	"npc_name": "Blue Team Member",
	"tileset": "npcs1.png",
	"tile_row": 4,
	"tile_col": 8,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
    { # Golden fox looking down - 4
	"npc_name": "Artist",
	"tileset": "npcs1.png",
	"tile_row": 9,
	"tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
    { # Green frog looking up - 5
	"npc_name": "Fisherman",
	"tileset": "npcs1.png",
	"tile_row": 14,
	"tile_col": 2,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
    { # Purple Squirrel looking up then left - 6
	"npc_name": "Tourist",
	"tileset": "npcs1.png",
	"tile_row": 8,
	"tile_col": 10,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0, 4],
        "anim_dir": "horizontal",
        "anim_speed": 2
    },
]

items_formatted = {}

for i, item in enumerate(items):
    items_formatted[str(i)] = item

with open(map_name+"_npcs.json", "w") as outfile:
    json.dump(items_formatted, outfile)
