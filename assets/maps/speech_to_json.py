import json

map_name = "map1"

items = [
    {
	"0": {
            "item": 0,
            "lines": [
                    ["player", "Hello there, how are you?"],
                    ["npc", "Good thanks, you?"],
                    ["player", "Not bad, anyways goodbye and seeya around"],
                    ["npc", "I need you to pick some items up for me, namely a magic card"],
                    ["npc", "I'll pay you upfront, thanks"],
                ],
            "reward": ["gold", 500]
            },
        "1": {
            "item": "magic card",
            "qty": 1,
            "keep": 0,
            "found": [
                    ["player", "Found it!"],
                    ["npc", "Ah thank you kindly"]
                ],
            "missing": [
                    ["npc", "I'm gonna need a little more than that, please go collect what I asked for, thank you very much"],
                    ["npc", "See you soon, bye!"]
                ],
            },
        "2": {
            "item": -1,
            "lines": [
                    ["player", ""],
                    ["npc", ""],
                    ["player", "ok..."],
                ]
            },
    },
]

items_formatted = {}

for i, item in enumerate(items):
    items_formatted[str(i)] = item

with open(map_name+"_speech.json", "w") as outfile:
    json.dump(items_formatted, outfile)
