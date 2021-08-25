import json

map_name = "blue_team_lounge"

items = [
    { # Elephant Looking down
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
    { # Ram looking down
	"npc_name": "Blue Team Member",
	"tileset": "npcs1.png",
	"tile_row": 7,
	"tile_col": 8,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
    { # Deer looking down then right (down at computer)
	"npc_name": "Blue Team Receptionist",
	"tileset": "npcs1.png",
	"tile_row": 3,
	"tile_col": 8,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,4],
        "anim_dir": "horizontal",
        "anim_speed": 1
    },
    { # Rabbit facing left
	"npc_name": "Blue Team Member",
	"tileset": "npcs1.png",
	"tile_row": 1,
	"tile_col": 15,
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
