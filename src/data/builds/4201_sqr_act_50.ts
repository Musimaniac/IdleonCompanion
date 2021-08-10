import { Class, Subclass } from "~/composables/Characters";

import { Build } from "~/composables/Builds";

export const build: Build = {
  title: "Squire / Active (~50)",
  notes: "",
  version: "1.21",
  tabs: [
    {
      skills: {
        "5": "50",
        "8": "*1",
        "10": "70",
        "12": "70",
      },
      comment:
        '*1 = Boost WIS to have as much accuracy as you need for the best AFK gains. Usually this will be the farthest monster you can reach without dying. If you\'re low on defense, by this point equipping food to stay alive is normal and expected.\nAfter improving Accuracy prioritise "Sharpened axe" > "Gilded Sword" > "Meatshank"',
    },
    {
      skills: {
        "1": "1",
        "2": "1",
        "4": "41",
        "5": "1",
        "6": "*1",
        "8": "100",
        "9": "*1",
      },
      comment:
        'Put 1 points into each active skill then max "Carry a Big Stick". Then, place 41 points into Double Strike.\n*1 = Spread excess points equally between "Absolute Unit" and "Strength in Numbers". \n1 point into "Firmly Grasp It" gives extra STR.',
    },
    {
      skills: {
        "1": "1",
        "2": "1",
        "6": "*1",
        "15": "100",
      },
      comment:
        'Put 1 point in every active skill, then 100 into "Back To Basics".\n*1 = Excess points can be used to level "Precision Power". If you level this talent, be sure to have 1.5x the 100% hit chance requirement when killing the monster you\'re farming. This skill will do nothing under the 1.5x requirement. You may need to put more points into "Book of the Wise" on Tab 1.',
    },
  ],
  class: Class.Squire,
};
