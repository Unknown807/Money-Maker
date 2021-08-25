import json

map_name = "blue_team_lounge"

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
    { # Elephant
        "0": {
            "item": 0,
            "lines": [
                    ["npc", "Beautifully crafted vases for sale!"],
                    ["player", "They are quite nice looking, how much for one?"],
                    ["npc", "Oh a customer! Well to be honest you're the first person to want any of my vases. So I'll give you this one I just made for FREE!"],
                    ["player", "Really?! Wow thank you very much"],
                    ["npc", "No problem, take care"]
                ],
            "reward": ["beautifully crafted blue vase", 1]
        },
        "1": {
            "item": -1,
            "lines": [
                    ["npc", "Anytime now someone else will come here and BUY one of my vases"],
                    ["player", "I'm er sure they will"],
                ]
            }
    },
    { # Ram
         "0": {
            "item": -1,
            "lines": [
                    ["npc", "Being a wooly ram in sweltering conditions is no fun at all. Thank goodness the Blue team has tons of air-conditioning"],
                ]
        },
    },
    { # Receptionist
         "0": {
            "item": "blue team badge",
            "qty": 1,
            "keep": 1,
            "found": [
                    ["npc", "Oh I'll be with you in one second I just need to...beat...this...level"],
                    ["player", "..."],
                    ["npc", "Damnit I lost!"],
                    ["npc", "Oh ah anyways, hello welcome to the Blue team, just relax, do whatever you want no obligations, nothing, you get it?"],
                    ["player", "Alrighty then"],
                    ["npc", "(Man this is like the 100th time I've lost on this level)"]
                ],
            "missing": [
                    ["npc", "Sorry playing a gam...I mean I'm busy right now, come back later"],
                    ["player", "I just wanted to ask..."],
                    ["npc", "Sorry later please!"],
                    ["player", "(What is your job then anyways?!?)"]
                ]
            },
         "1": {
             "item": -1,
             "lines": [
                     ["npc", "*click* *click *click* not another loss!"],
                     ["player", "(Nevermind, I don't think I should bother asking anything)"]
                 ]
             },        
    },
    { # Rabbit
        "0": {
            "item": -1,
            "lines": [
                    ["npc", "Yep Blue team was the right choice, only they have the most relaxing places to lounge..."],
                    ["player", "Oh you a new member?"],
                    ["npc", "zzzzzzZZZ"],
                    ["player", "Er...nevermind"]
                ]
            }
    },
    
]


items_formatted = {}

for i, item in enumerate(items):
    items_formatted[str(i)] = item

with open(map_name+"_speech.json", "w") as outfile:
    json.dump(items_formatted, outfile)
