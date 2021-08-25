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
    { # grey cat walking right - 0
        "tileset": "npcs1.png",
        "tile_row": 11,
        "tile_col": 12,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,1],
        "anim_dir": "horizontal",
        "anim_speed": 6
    },
    { # slightly red frog facing down - 1
        "tileset": "npcs1.png",
        "tile_row": 5,
        "tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
    { # grey dog turning left then right - 2
        "tileset": "npcs1.png",
        "tile_row": 15,
        "tile_col": 13,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,1],
        "anim_dir": "horizontal",
        "anim_speed": 2
    },
    { # green squirrel facing down - 3
        "tileset": "npcs1.png",
        "tile_row": 17,
        "tile_col": 6,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,],
        "anim_dir": "horizontal",
        "anim_speed": 0
    },
    { # red elephant running down - 4
        "tileset": "npcs1.png",
        "tile_row": 4,
        "tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,1],
        "anim_dir": "horizontal",
        "anim_speed": 3
    },
    { # brown deer running down - 5
        "tileset": "npcs1.png",
        "tile_row": 3,
        "tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,1],
        "anim_dir": "horizontal",
        "anim_speed": 3
    },
    { # red rabbit running down - 6
        "tileset": "npcs1.png",
        "tile_row": 1,
        "tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,1],
        "anim_dir": "horizontal",
        "anim_speed": 3
    },
    { # redish frog running down - 7
        "tileset": "npcs1.png",
        "tile_row": 5,
        "tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,1],
        "anim_dir": "horizontal",
        "anim_speed": 3
    },
    { # red cat running down - 8
        "tileset": "npcs1.png",
        "tile_row": 2,
        "tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,1],
        "anim_dir": "horizontal",
        "anim_speed": 3
    },
    { # redish squirrel running down - 9
        "tileset": "npcs1.png",
        "tile_row": 8,
        "tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,1],
        "anim_dir": "horizontal",
        "anim_speed": 3
    },
    { # brownish fox running down - 10
        "tileset": "npcs1.png",
        "tile_row": 0,
        "tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,1],
        "anim_dir": "horizontal",
        "anim_speed": 3
    },
    { # red dog running down - 11
        "tileset": "npcs1.png",
        "tile_row": 6,
        "tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,1],
        "anim_dir": "horizontal",
        "anim_speed": 3
    },
    { # red ram running down - 12
        "tileset": "npcs1.png",
        "tile_row": 7,
        "tile_col": 0,
        "tile_width": 32,
        "tile_height": 32,
        "anim_frames": [0,1],
        "anim_dir": "horizontal",
        "anim_speed": 3
    },
]

items_formatted = {}

for i, item in enumerate(items):
    items_formatted[str(i)] = item

with open("animated_tiles_pool.json", "w") as outfile:
    json.dump(items_formatted, outfile)
