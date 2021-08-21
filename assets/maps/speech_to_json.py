import json

map_name = "map2"

items = [
    {
        "0": {
            "item": -1,
            "lines": [
                    ["player", "Oh I didnt know anyone was in here!"],
                    ["npc", "Whatever..."],
                    ["player", "alrighty..."],
                ]
            },
    },
]

items_formatted = {}

for i, item in enumerate(items):
    items_formatted[str(i)] = item

with open(map_name+"_speech.json", "w") as outfile:
    json.dump(items_formatted, outfile)
