import json

map_name = "main_island_temple_1"

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
    { # Gray Ram - 0
        "0": {
            "item": "little turtle",
            "qty": 1,
            "keep": 0,
            "found": [
                    ["npc", "Oh you found the temple turtle thank goodness! I was looking all over"],
                    ["player", "He was just right outside?"],
                    ["npc", "Well I'm quite old and cannot see that far, so you're endeavor means a lot!"],
                    ["player", "Thank you very much old man"],
                    ["npc", "Tell you what, next time you speak to me I'll give you a gift, first I gotta find it in my things"],
                    ["player", "Sounds good"]
                ],
            "missing": [
                    ["npc", "Have you seen the temple turtle, its very important to me as the head monk here! Its a most holy animal"],
                    ["player", "I'll bring it to you if I find it"],
                    ["npc", "Thank you kindly"]
                ]
        },
        "1": {
            "item": 0,
            "lines": [
                    ["npc", "Heres your gift as promised, my old lucky coin!"],
                    ["player", "Wow for being quite old looking it seems as shiny as ever"],
                    ["npc", "Maybe thats the luck showing its worth haha"],
                    ["player", "Well thank you very much"],
                    ["npc", "Take care"]
                ]
            },
        "2": {
            "item": -1,
            "lines": [
                    ["npc", "Take some time to pray or leave an offering of food and your soul will feel ten times lighter"],
                    ["player", "Thanks I guess"]
                ]
            }
    },
    { # Yellow Elephant
        "0": {
            "item": 0,
            "lines": [
                    ["npc", "For fuc-fudges sake my hammer broke again, argh I'm gonna have to buy a new one >:("],
                    ["npc", "Hey you take this damn thing I don't want it at all"],
                    ["player", "Er...thanks?"]
                ],
            "reward": ["broken hammer", 1]
            },
        "1": {
            "item": -1,
            "lines": [
                    ["player", "So what are you doing there anyways?"],
                    ["npc", "I'm trying to sculpt my masterpiece, but all I can do are these trophy looking sculptures"],
                    ["npc", "I gotta improve my craft a little more"],
                    ["player", "Goodluck with that then"]
                ]
            }
    },
    { # Dark Blue Rabbit
        "0": {
            "item": -1,
            "lines": [
                    ["npc", "ooh! ahh! HOT! No don't spill!"],
                    ["player", "Sorry am I interrupting your work?"],
                    ["npc", "No not at all! Its just - ooh! - trying to cook with this broken furnace is sorta - ahh! - dangerous - eep!"],
                    ["player", "Ah ok, er... take care"]
                ]
            }
    }
]


items_formatted = {}

for i, item in enumerate(items):
    items_formatted[str(i)] = item

with open(map_name+"_speech.json", "w") as outfile:
    json.dump(items_formatted, outfile)
