import json

##items = [
##    {
##	"tileset": "players.png",
##	"tile_row": 4,
##	"tile_col": 9,
##        "tile_width": 32,
##        "tile_height": 32,
##        "anim_frames": [0,1,2],
##        "anim_dir": "horizontal",
##        "anim_speed": 6
##    },
##]

items = [
    { # grey cat walking right
        "tileset": "npcs1.png",
        "tile_row": 11,
        "tile_col": 12,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,1],
        "anim_dir": "horizontal",
        "anim_speed": 6
    },
    { # slightly red frog facing down
        "tileset": "npcs1.png",
        "tile_row": 5,
        "tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
    { # grey dog turning left then right
        "tileset": "npcs1.png",
        "tile_row": 15,
        "tile_col": 13,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,1],
        "anim_dir": "horizontal",
        "anim_speed": 2
    },
    { # green squirrel facing down
        "tileset": "npcs1.png",
        "tile_row": 17,
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

with open("animated_tiles_pool.json", "w") as outfile:
    json.dump(items_formatted, outfile)
