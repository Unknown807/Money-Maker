import json

items = [
    {
	"tileset": "players.png",
	"tile_row": 4,
	"tile_col": 9,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,1,2],
        "anim_dir": "horizontal",
        "anim_speed": 6
    },
]

items_formatted = {}

for i, item in enumerate(items):
    items_formatted[str(i)] = item

with open("animated_tiles_pool.json", "w") as outfile:
    json.dump(items_formatted, outfile)
