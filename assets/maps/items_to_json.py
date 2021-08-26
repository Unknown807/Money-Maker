import json

items = [
    { # 0
        "item_name": "unmarked badge",
        "tileset": "items.png",
        "tile_row": 0,
        "tile_col": 13
    },
    { # 1
        "item_name": "little turtle",
        "tileset": "items.png",
        "tile_row": 8,
        "tile_col": 10
    },
    { # 2
        "item_name": "little key",
        "tileset": "items.png",
        "tile_row": 0,
        "tile_col": 2
    },
]

items_formatted = {}

for i, item in enumerate(items):
    items_formatted[str(i)] = item

with open("items_pool.json", "w") as outfile:
    json.dump(items_formatted, outfile)
