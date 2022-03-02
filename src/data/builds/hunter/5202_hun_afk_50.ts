import { Class } from "~/composables/Characters";

import { Build } from "~/composables/Builds";

export const build: Build = {
  title: "Hunter / AFK (~50)",
  notes:
    "Active Skills act as a multiplyer to your total dmg for afk. \n How many points you need depends on your "Attacks on Simmer" Star Talent and "All for Kill" bubble. If you got spare talent resets, reset your build at your fighting area and lvl attack talents last till you do not gain any more kills per hour.",
  version: "1.40b",
  level: 50,
  tabs: [
    {
      skills: {
        "5": "80",
        "6": "*1",
        "10": "80",
        "14": "50",
      },
      comment:
        '*1 = Boost STR to have as much accuracy as you need for the best AFK gains. Usually this will be the farthest monster you can reach without dying. If you\'re low on defense, by this point equipping food to stay alive is normal and expected. \n"Idle Shooting" to 50 for 10% AFK gain rate. \n Priority is "Gilded Sword" > "Sharpened Axe". ',
    },
    {
      skills: {
        "1": "25",
        "2": "25",
        "4": "1",
        "5": "20",
        "6": "50",
        "8": "50",
      },
      comment:
        'Level "Polymer Limbs" to 50, active damage skills to 25, then value point into "Strafe" and activate it before going offline. Afterwards, level up "Have Another" to 20 & "Veins of the Infernal" to 50 if you can afford. Raise your Smithing lvl by produceing 2/3x thread. ',
    },
    {
      skills: {
        "1": "30",
        "2": "30",
        "5": "20",
        "6": "20",
      },
      comment:
        'Level up "360 Noscope" and "Bear Trap" to 30. \n Then raise "Have another... Again" and "Looty Mcshooty" to 20.',
    },
  ],
  class: Class.Hunter,
};
