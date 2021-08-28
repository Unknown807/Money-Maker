import json

items = [
    { # Spin the wheel - 0
        "tileset": "items.png", # <-- game item sprite
        "tile_row": 11,
        "tile_col": 13,
    }
]

items_formatted = {}

for i, item in enumerate(items):
    items_formatted[str(i)] = item

with open("games_pool.json", "w") as outfile:
    json.dump(items_formatted, outfile)
