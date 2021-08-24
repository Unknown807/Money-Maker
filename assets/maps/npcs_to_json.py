import json

map_name = "main_island_lounge"

items = [
    {
	"npc_name": "Team Yellow Captain",
	"tileset": "npcs1.png",
	"tile_row": 11,
	"tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
    {
	"npc_name": "Team Red Captain",
	"tileset": "npcs1.png",
	"tile_row": 4,
	"tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
    {
	"npc_name": "Team Blue Captain",
	"tileset": "npcs1.png",
	"tile_row": 2,
	"tile_col": 14,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
    {
	"npc_name": "Team Black Captain",
	"tileset": "npcs1.png",
	"tile_row": 12,
	"tile_col": 13,
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
