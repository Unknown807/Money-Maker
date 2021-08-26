import json

map_name = "main_island_town_1"

##items = [
##    {
##        "0": {
##            "item": -1,
##            "lines": [
##                    ["player", "Oh I didnt know anyone was in here!"],
##                    ["npc", "Whatever..."],
##                    ["player", "alrighty..."],
##                ]
##            },
##    },
##]

##items = [
##    {
##	"0": {
##            "item": 0,
##            "lines": [
##                    ["player", "Hello there, how are you?"],
##                    ["npc", "Good thanks, you?"],
##                    ["player", "Not bad, anyways goodbye and seeya around"],
##                    ["npc", "I need you to pick some items up for me, namely a magic card"],
##                    ["npc", "I'll pay you upfront, thanks"],
##                ],
##            "reward": ["gold", 500]
##            },
##        "1": {
##            "item": "magic card",
##            "qty": 1,
##            "keep": 0,
##            "found": [
##                    ["player", "Found it!"],
##                    ["npc", "Ah thank you kindly"]
##                ],
##            "missing": [
##                    ["npc", "I'm gonna need a little more than that, please go collect what I asked for, thank you very much"],
##                    ["npc", "See you soon, bye!"]
##                ],
##            },
##        "2": {
##            "item": -1,
##            "lines": [
##                    ["player", ""],
##                    ["npc", ""],
##                    ["player", "ok..."],
##                ]
##            },
##    },
##]

items = [
    { # Green Ram - 0
        "0": {
            "item": -1,
            "lines": [
                    ["npc", "Don't you just love the shimmer of the shores, the whistling of the wind and the warmth of the sun..."],
                    ["player", "Its quite peaceful out here yeah"],
                ],
        }
    },
    { # Blue Cat - 1
        "0": {
            "item": -1,
            "lines": [
                    ["player", "What's this temple here all about?"],
                    ["npc", "I'm just a simple farmer here, but from what I know it was constructed many hundreds of years ago for the deities of the natural elements"],
                    ["player", "Natural elements?"],
                    ["npc", "The natural elements in this world are Earth, Water, Fire, Air and the thing that binds them all Luck!"],
                    ["player", "Oh interesting I didn't know luck was one"],
                    ["npc", "Well the more you know..."]
                ]
        }
    },
    { # Dark Rabbit - 2
        "0": {
            "item": -1,
            "lines": [
                    ["npc", "As much as I love books, I just couldn't stay cooped up in that lounge all day, just look at how nice mother nature is. The Black team really should stop sneering anytime a suggestion of going outside is mentioned :( That captain just doesn't listen!"],
                ],
        }
    },
    { # Purple Elephant - 3
        "0": {
            "item": -1,
            "lines": [
                    ["npc", "The Blue team's air conditioning is just too cold, I've gone purple! Its a lot warmer outside!"],
                    ["npc", "You know what I'm not going in that lounge ever again!"],
                    ["player", "Thats quite the commitment"],
                    ["npc", "I know and I plan on sticking to i...wait where's my snack? Oh no I left it in the Blue team lounge O.O"],
                    ["player", "Well goodluck with your situation"]
                ],
        }
    },
    { # Golden Fox - 4
        "0": {
            "item": -1,
            "lines": [
                    ["npc", "Look how the reeds sway in the water, listen to the chirping of birds and waving of flowers in the wind..."],
                    ["npc", "Now this is something worth painting!"]
                ],
        }
    },
    { # Green Frog - 5
        "0": {
            "item": -1,
            "lines": [
                    ["npc", "You should try fishing it teaches you great patience as you wait for a catch"],
                    ["player", "Maybe, though I probably don't have too much time for that"],
                    ["npc", "Well when you do go really savour the moment!"],
                    ["player", "Sure..."]
                ],
        }
    },
    { # Purple Squirrel - 6
        "0": {
            "item": 0,
            "lines": [
                    ["npc", "You ever skipped stones before?"],
                    ["player", "Not in a long time"],
                    ["npc", "You should give it a try, good exercise and it improves your hand-eye coordination"],
                    ["npc", "Here take some of my stones no charge!"],
                    ["player", "(Why would I pay for stones anyways?)"],
                    ["player", "Um thanks"],
                ],
            "reward": ["stone", 3]
        },
        "1": {
            "item": -1,
            "lines": [
                    ["npc", "Whoops! Almost hit someone there"],
                ]
        }
    },
    
]


items_formatted = {}

for i, item in enumerate(items):
    items_formatted[str(i)] = item

with open(map_name+"_speech.json", "w") as outfile:
    json.dump(items_formatted, outfile)
