import json

map_name = "map1"

items = [
    {
	"item_row": 16,
	"item_col": 19,
	"item_name": "magic card",
	"tileset": "interiors.png",
	"tile_row": 16,
	"tile_col": 0,
    },
]

items_formatted = {}

for i, item in enumerate(items):
    items_formatted[str(i)] = item

with open(map_name+"_items.json", "w") as outfile:
    json.dump(items_formatted, outfile)
