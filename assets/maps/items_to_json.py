import json

##items = [
##    {
##	"item_name": "magic card",
##	"tileset": "interiors.png",
##	"tile_row": 16,
##	"tile_col": 0,
##    },
##]

items = [
    {},
]

items_formatted = {}

for i, item in enumerate(items):
    items_formatted[str(i)] = item

with open("items_pool.json", "w") as outfile:
    json.dump(items_formatted, outfile)
