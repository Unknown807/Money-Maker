import json

map_name = "main_island_lounge"

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
    {# Team yellow captain
        "0": {
            "item": 0,
            "lines": [
                    ["npc", "HEY THERE WANNA JOIN THE YELLOW TEAM!!!?!?"],
                    ["player", "ah I just wanted to know what you guys lik..."],
                    ["npc", "WE LOVE EVERYTHING NATURE, THE SUN, THE GRASS, THE BUGS!!!!"],
                    ["npc", "IF YOU'RE INTERESTED IN JOINING THE YELLOW TEAM JUST SPEAK TO ME AGAIN AND MAKE SURE YOU HAVE AN UNMARKED BADGE!!!!"],
                    ["player", "Aha...yep will do..."]
                ]
            },
        "1": {
            "item": "unmarked badge",
            "qty": 1,
            "keep": 0,
            "found": [
                    ["npc", "ALRIGHT ALRIGHT ALRIGHT!!! YOU'RE GONNA LOOOOVEE THE YELLOW TEAM!!!!"],
                    ["player", "I bet I am!"],
                    ["npc", "GIVE ME A SECOND TO MAKE YOU YOU'RE NEW BADGE!!! JUST TALK TO ME AGAIN LATER!!!"],
                    ["player", "ok seeya"]
                ],
            "missing": [
                    ["npc", "IF YOU WANNA JOIN THE TEAM GET AN UNMARKED BADGE, OR SCRAM IF YOU'RE ALREADY IN A TEAM!!!"],
                    ["player", "er...alright"],
                ]
            },
        "2": {
            "item": 0,
            "lines": [
                    ["npc", "HERE'S YOU'RE BADGE TEAM MEMBER!!!"],
                    ["player", "thanks!"],
                ],
            "reward": ["yellow team badge", 1]
            },
        "3": {
            "item": -1,
            "lines": [
                    ["npc", "WANNA HEAR A JOKE!?!??! KNOCK KNOCK KNOCK KNOCK KNOCK KNOCK KNOCK..."],
                    ["player", "er...who's there?"],
                    ["npc", "KNOCK KNOCK KNOCK KNOCK KNOCK KNOCK KNOCK..."],
                    ["player", "umm you finished yet?"],
                    ["npc", "I FORGOT WHAT I WAS GONNNNNNAAA SAAAAYY!!!"],
                    ["player", "That's ok I'll seeya around I guess?"],
                    ["npc", "YEAH YEAH NO SWEAT BYE!!!"],
                ]
            }
    },
    {# Team red captain
        "0": {
            "item": 0,
            "lines": [
                    ["npc", "Only join the red team if DANGER is you're middl-FIRST name!"],
                    ["player", "(a bit cringe...)"],
                    ["npc", "Did you just say something there?"],
                    ["player", "Ah no nothing!"],
                    ["npc", "Ah ok, well there should be an unmarked badge lying around somewhere here, speak to me when you have it next if you want to join the Red Team"],
                    ["player", "Will do"],
                ]
            },
        "1": {
            "item": "unmarked badge",
            "qty": 1,
            "keep": 0,
            "found": [
                    ["npc", "I knew you wanted to join this team from the moment I saw you, only the strongest have the will to join!"],
                    ["player", "All that from a look?"],
                    ["npc", "Yea-well no, er...its more complex than that, you need years of practice as the Team's Captain to determine that!"],
                    ["npc", "Talk to me again and i'll have your badge ready"],
                    ["player", "Ok then seeya"],
                ],
            "missing": [
                    ["npc", "No joining without the badge buddy"],
                    ["player", "ok"],
                ]
            },
        "2": {
            "item": 0,
            "lines": [
                    ["npc", "Congratulations on joining the strongest team here!"],
                    ["player", "Ok, thanks"],
                ],
            "reward": ["red team badge", 1]
            },
        "3": {
            "item": -1,
            "lines": [
                    ["npc", "(Mm I wish I became a landscaper...)"],
                    ["player", "Did you say something?"],
                    ["npc", "OH! I mean I love being strong and in the Red team alright!"],
                    ["player", "Right...bye then"],
                ]
            }
    },
    {# Team blue captain
        "0": {
            "item": 0,
            "lines": [
                    ["npc", "You like relaxing?"],
                    ["player", "Yeah who doesn't?"],
                    ["npc", "Well then bring on over an unmarked badge and you can join the Blue team"],
                    ["player", "Ok, got it"],
                ]
            },
        "1": {
            "item": "unmarked badge",
            "qty": 1,
            "keep": 0,
            "found": [
                    ["npc", "Nice, just give me a moment to make you a nice shiny Blue team badge"],
                    ["player", "Ok, talk to you later"],
                ],
            "missing": [
                    ["npc", "You need to give me an unmarked badge so I can er...mark it duh! Only then you can join the Blue team"],
                    ["player", "Ok"],
                ]
            },
        "2": {
            "item": 0,
            "lines": [
                    ["npc", "Nice, feel feel to walk around the main island and also the Blue team's relaxation room is through those doors above"],
                    ["player", "Ok, thanks"]
                ],
            "reward": ["blue team badge", 1]
            },
        "3": {
            "item": -1,
            "lines": [
                    ["npc", "Its pretty hot in this room can anyone turn it down to something cooooler?"],
                ]
            }
    },
    {# Team black captain
        "0": {
            "item": 0,
            "lines": [
                    ["npc", "Books, books, books! Who doesn't love books! Adventures, romance, danger, endless enjoyment!"],
                    ["npc", "Oh I lost myself a bit there, you wanna join our team? If so just bring me an unmarked badge"],
                    ["player", "Ok"],
                ]
            },
        "1": {
            "item": "unmarked badge",
            "qty": 1,
            "keep": 0,
            "found": [
                    ["npc", "Ah thanks for the badge, talk to me later to get your team one. In the mean time read a book?"],
                    ["player", "Alright"]
                ],
            "missing": [
                    ["npc", "I need an unmarked badge from you if you wish to join the Black team, if you're already part of a team then read a book about bad choices haha!"],
                    ["player", "Right..."],
                ]
            },
        "2": {
            "item": 0,
            "lines": [
                    ["npc", "You are now part of the Black team, feel free to read some more books in the back room there"],
                    ["player", "Sure"]
                ],
            "reward": ["black team badge", 1]
            },
        "3": {
            "item": -1,
            "lines": [
                    ["player", "You ever go outside instead of read books?"],
                    ["npc", "Why would I, the books talk about everything outside anyways haha!"],
                    ["player", "Well I'm off to explore"],
                    ["npc", "Yeah yeah yeah whatever, I'm reading a book here!"]
                ]
            }
    },
]


items_formatted = {}

for i, item in enumerate(items):
    items_formatted[str(i)] = item

with open(map_name+"_speech.json", "w") as outfile:
    json.dump(items_formatted, outfile)
