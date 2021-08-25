import json

map_name = "yellow_team_lounge"

items = [
    { # Frog looking down
	"npc_name": "Yellow Team Member",
	"tileset": "npcs1.png",
	"tile_row": 14,
	"tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,8],
        "anim_dir": "horizontal",
        "anim_speed": 2
    },
    { # Rabbit looking right
	"npc_name": "Yellow Team Member",
	"tileset": "npcs1.png",
	"tile_row": 10,
	"tile_col": 4,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
    { # Ram looking down then right
	"npc_name": "Yellow Team Receptionist",
	"tileset": "npcs1.png",
	"tile_row": 16,
	"tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,4],
        "anim_dir": "horizontal",
        "anim_speed": 2
    },
    { # Elephant looking left
	"npc_name": "Yellow Team Member",
	"tileset": "npcs1.png",
	"tile_row": 13,
	"tile_col": 6,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
]

items_formatted = {}

for i, item in enumerate(items):
    items_formatted[str(i)] = item

with open(map_name+"_npcs.json", "w") as outfile:
    json.dump(items_formatted, outfile)
