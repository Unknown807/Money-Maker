import json

map_name = "yellow_team_lounge"

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
    { # Frog
        "0": {
            "item": -1,
            "lines": [
                    ["npc", "My dad was a Chameleon and my mom was a Frog, which explains why I'm this half-baked mess which randomly switches colours"],
                    ["player", "That's quite an interesting predicament"],
                ],
        }
    },
    { # Rabbit
         "0": {
            "item": -1,
            "lines": [
                    ["npc", "I love the sun it's so orange just like me!"]
                ]
        },
    },
    { # Ram
         "0": {
            "item": "yellow team badge",
            "qty": 1,
            "keep": 1,
            "found": [
                    ["npc", "*click* *tap *click*, oh! You're the new Yellow team member so sorry I was just sending and replying to a ton of my emails"],
                    ["player", "Er no problem, I just wanted to know more about the Yellow team"],
                    ["npc", "Ah yeah, I feel the captain out front doesn't really do a good job explaining"],
                    ["npc", "Well the Yellow team has always stood for (something something) and we seek to achieve (er something or other)..."],
                    ["player", "Um...I'm not catching the key parts of your explanation there, why are you whispering?"],
                    ["npc", "Well because, er...OH! Look an email I really have to answer this now, bye!"],
                    ["player", "(Yeah he has no idea what he's talking about...)"]
                ],
            "missing": [
                    ["npc", "Sorry I don't have time to spend on non-yellow team members, bye!"],
                    ["player", "hmph"]
                ]
            },
         "1": {
             "item": -1,
             "lines": [
                     ["player", "If your the Yellow team why are there so many green people around?"],
                     ["npc", "Good question, that's because...er...actually I don't know, something about symbolism and plants and the sun, yeah I forget"],
                     ["player", "Er...right thanks"],
                 ]
             },        
    },
    { # Elephant
        "0": {
            "item": -1,
            "lines": [
                    ["npc", "People need to put more effort into maintaining their ecosystem services and preventing the deforestation and destruction of important carbon sinks such as the tropical rainforests of the world. This would ensure a sustainable and long lasting future for us here on Earth"],
                    ["npc", "Really grinds my gears!"],
                    ["player", "Yeah er, whatever you said"],
                ]
            }
    },
    
]


items_formatted = {}

for i, item in enumerate(items):
    items_formatted[str(i)] = item

with open(map_name+"_speech.json", "w") as outfile:
    json.dump(items_formatted, outfile)
