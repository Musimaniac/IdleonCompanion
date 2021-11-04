import { Growth, GrowthFunc } from "~/composables/Utilities";

export type Stamp = {
  name: string;
  material: string;
  bonus: string;
  baseCoinCost: number;
  baseMatCost: number;
  powCoinBase: number;
  powMatBase: number;
  diffRatio: number;
  par1: number;
  par2: number;
  growthFunc: GrowthFunc;
};

const CombatStamps: Stamp[] = [
  {
    name: "Sword Stamp",
    material: "Spore Cap",
    bonus: "Base Damage",
    baseCoinCost: 50,
    baseMatCost: 20,
    powCoinBase: 1.3,
    powMatBase: 5,
    diffRatio: 5,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Heart Stamp",
    material: "Oak Logs",
    bonus: "Base HP",
    baseCoinCost: 50,
    baseMatCost: 25,
    powCoinBase: 1.3,
    powMatBase: 7,
    diffRatio: 5,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Mana Stamp",
    material: "Copper Ore",
    bonus: "Base MP",
    baseCoinCost: 50,
    baseMatCost: 25,
    powCoinBase: 1.3,
    powMatBase: 7,
    diffRatio: 5,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Tomahawk Stamp",
    material: "Copper Bar",
    bonus: "% Total Damage",
    baseCoinCost: 50,
    baseMatCost: 15,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 4,
    par1: 6,
    par2: 40,
    growthFunc: Growth.Decay,
  },
  {
    name: "Target Stamp",
    material: "Thread",
    bonus: "Base Accuracy",
    baseCoinCost: 50,
    baseMatCost: 25,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 5,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Shield Stamp",
    material: "Iron Ore",
    bonus: "Base Defence",
    baseCoinCost: 50,
    baseMatCost: 50,
    powCoinBase: 1.3,
    powMatBase: 7,
    diffRatio: 5,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Longsword Stamp",
    material: "Bean Slices",
    bonus: "Base Damage",
    baseCoinCost: 50,
    baseMatCost: 50,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 4,
    par1: 2,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Kapow Stamp",
    material: "Trusty Nails",
    bonus: "% Critical Damage",
    baseCoinCost: 50,
    baseMatCost: 50,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 3,
    par1: 8,
    par2: 40,
    growthFunc: Growth.Decay,
  },
  {
    name: "Fist Stamp",
    material: "Bleach Logs",
    bonus: "STR",
    baseCoinCost: 50,
    baseMatCost: 50,
    powCoinBase: 1.3,
    powMatBase: 7,
    diffRatio: 2,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Battleaxe Stamp",
    material: "Grass Leaf",
    bonus: "% Total Damage",
    baseCoinCost: 50,
    baseMatCost: 25,
    powCoinBase: 1.3,
    powMatBase: 4,
    diffRatio: 4,
    par1: 10,
    par2: 40,
    growthFunc: Growth.Decay,
  },
  {
    name: "Agile Stamp",
    material: "Copper Chopper",
    bonus: "AGI",
    baseCoinCost: 50,
    baseMatCost: 1,
    powCoinBase: 1.3,
    powMatBase: 4,
    diffRatio: 2,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Vitality Stamp",
    material: "Snake Skin",
    bonus: "Base HP",
    baseCoinCost: 50,
    baseMatCost: 25,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 4,
    par1: 2,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Book Stamp",
    material: "Iron Bar",
    bonus: "WIS",
    baseCoinCost: 50,
    baseMatCost: 20,
    powCoinBase: 1.35,
    powMatBase: 5,
    diffRatio: 2,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Manamoar Stamp",
    material: "Goblin Ear",
    bonus: "Base MP",
    baseCoinCost: 75,
    baseMatCost: 25,
    powCoinBase: 1.32,
    powMatBase: 6,
    diffRatio: 3,
    par1: 2,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Clover Stamp",
    material: "Iron Platebody",
    bonus: "LUK",
    baseCoinCost: 300,
    baseMatCost: 1,
    powCoinBase: 1.38,
    powMatBase: 2,
    diffRatio: 2,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Scimitar Stamp",
    material: "Goldfish",
    bonus: "Base Damage",
    baseCoinCost: 2000,
    baseMatCost: 75,
    powCoinBase: 1.33,
    powMatBase: 7,
    diffRatio: 4,
    par1: 3,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Bullseye Stamp",
    material: "Sentient Cereal",
    bonus: "Base Accuracy",
    baseCoinCost: 5000,
    baseMatCost: 100,
    powCoinBase: 1.36,
    powMatBase: 10,
    diffRatio: 5,
    par1: 2,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Feather Stamp",
    material: "Coconotnotto",
    bonus: "Base Move Speed",
    baseCoinCost: 2500,
    baseMatCost: 25,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 5,
    par1: 5,
    par2: 50,
    growthFunc: Growth.Decay,
  },
  {
    name: "Polearm Stamp",
    material: "Steel Axe",
    bonus: "% Total Damage",
    baseCoinCost: 3000,
    baseMatCost: 1,
    powCoinBase: 1.3,
    powMatBase: 2,
    diffRatio: 6,
    par1: 16,
    par2: 40,
    growthFunc: Growth.Decay,
  },
  {
    name: "Violence Stamp",
    material: "Dementia Ore",
    bonus: "STR",
    baseCoinCost: 10000,
    baseMatCost: 10,
    powCoinBase: 1.3,
    powMatBase: 7,
    diffRatio: 3,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Buckler Stamp",
    material: "Platinum Bar",
    bonus: "Base Defence",
    baseCoinCost: 2200,
    baseMatCost: 25,
    powCoinBase: 1.305,
    powMatBase: 6,
    diffRatio: 7,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Sukka Foo",
    material: "Amarok Slab",
    bonus: "% Boss Damage",
    baseCoinCost: 10000,
    baseMatCost: 3,
    powCoinBase: 1.34,
    powMatBase: 5,
    diffRatio: 10,
    par1: 24,
    par2: 60,
    growthFunc: Growth.Decay,
  },
  {
    name: "Arcane Stamp",
    material: "Gold Bar",
    bonus: "Base WIS",
    baseCoinCost: 1550,
    baseMatCost: 50,
    powCoinBase: 1.36,
    powMatBase: 7,
    diffRatio: 3,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Steve Sword",
    material: "Fruitfly",
    bonus: "% Total Damage",
    baseCoinCost: 10000,
    baseMatCost: 150,
    powCoinBase: 1.32,
    powMatBase: 5,
    diffRatio: 10,
    par1: 20,
    par2: 60,
    growthFunc: Growth.Decay,
  },
  {
    name: "Blover Stamp",
    material: "Jellyfish",
    bonus: "Base LUK",
    baseCoinCost: 25000,
    baseMatCost: 100,
    powCoinBase: 1.39,
    powMatBase: 7,
    diffRatio: 4,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Stat Graph Stamp",
    material: "Mystery Upgrade Stone I",
    bonus: "All Stats",
    baseCoinCost: 2000,
    baseMatCost: 2,
    powCoinBase: 1.36,
    powMatBase: 2,
    diffRatio: 2,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
];

const SkillStamps: Stamp[] = [
  {
    name: "Pickaxe Stamp",
    material: "Oak Logs",
    bonus: "Mining Efficiency",
    baseCoinCost: 50,
    baseMatCost: 25,
    powCoinBase: 1.3,
    powMatBase: 7,
    diffRatio: 10,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Hatchet Stamp",
    material: "Thread",
    bonus: "Choppin Efficiency",
    baseCoinCost: 50,
    baseMatCost: 25,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 10,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Anvil Zoomer Stamp",
    material: "Copper Ore",
    bonus: "% Anvil Production Spd",
    baseCoinCost: 50,
    baseMatCost: 25,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 5,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Lil' Mining Baggy Stamp",
    material: "Jungle Logs",
    bonus: "Mining Carry Cap",
    baseCoinCost: 50,
    baseMatCost: 25,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 10,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Twin Ores Stamp",
    material: "Thief Hood",
    bonus: "% Multi Ore Chance",
    baseCoinCost: 10000,
    baseMatCost: 1,
    powCoinBase: 1.3,
    powMatBase: 3,
    diffRatio: 5,
    par1: 15,
    par2: 40,
    growthFunc: Growth.Decay,
  },
  {
    name: "Choppin' Bag Stamp",
    material: "Carrot Cube",
    bonus: "Choppin Carry Cap",
    baseCoinCost: 50,
    baseMatCost: 25,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 10,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Duplogs Stamp",
    material: "Militia Helm",
    bonus: "% Multi Log Chance",
    baseCoinCost: 20000,
    baseMatCost: 1,
    powCoinBase: 1.3,
    powMatBase: 3,
    diffRatio: 5,
    par1: 15,
    par2: 40,
    growthFunc: Growth.Decay,
  },
  {
    name: "Matty Bag Stamp",
    material: "Cramped Material Pouch",
    bonus: "Material Carry Cap",
    baseCoinCost: 50,
    baseMatCost: 1,
    powCoinBase: 1.3,
    powMatBase: 2,
    diffRatio: 10,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Smart Dirt Stamp",
    material: "Plank",
    bonus: "% Mining Exp",
    baseCoinCost: 80,
    baseMatCost: 25,
    powCoinBase: 1.35,
    powMatBase: 6,
    diffRatio: 5,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Cool Diggy Tool Stamp",
    material: "Iron Hatchet",
    bonus: "Mining Efficiency",
    baseCoinCost: 35000,
    baseMatCost: 1,
    powCoinBase: 1.4,
    powMatBase: 2,
    diffRatio: 10,
    par1: 2,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "High IQ Lumber Stamp",
    material: "Bullfrog Horn",
    bonus: "% Choppin Exp",
    baseCoinCost: 80,
    baseMatCost: 25,
    powCoinBase: 1.35,
    powMatBase: 6,
    diffRatio: 5,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Swag Swingy Tool Stamp",
    material: "Copper Pickaxe",
    bonus: "Choppin Efficiency",
    baseCoinCost: 50000,
    baseMatCost: 1,
    powCoinBase: 1.36,
    powMatBase: 2,
    diffRatio: 10,
    par1: 2,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Alch Go Brrr Stamp",
    material: "Forest Fibres",
    bonus: "% Alch Speed",
    baseCoinCost: 800,
    baseMatCost: 40,
    powCoinBase: 1.29,
    powMatBase: 6,
    diffRatio: 4,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Brainstew Stamps",
    material: "Gold Ore",
    bonus: "% Alch Exp",
    baseCoinCost: 1250,
    baseMatCost: 40,
    powCoinBase: 1.28,
    powMatBase: 6,
    diffRatio: 5,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Drippy Drop Stamp",
    material: "Pocket Sand",
    bonus: "% Liquid Spd",
    baseCoinCost: 1000,
    baseMatCost: 60,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 5,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Droplots Stamp",
    material: "Bloach",
    bonus: "Liquid Cap",
    baseCoinCost: 2500,
    baseMatCost: 25,
    powCoinBase: 1.3,
    powMatBase: 4,
    diffRatio: 2,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Fishing Rod Stamp",
    material: "Fly",
    bonus: "Fishing Efficiency",
    baseCoinCost: 1000,
    baseMatCost: 50,
    powCoinBase: 1.32,
    powMatBase: 6,
    diffRatio: 5,
    par1: 2,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Fishhead Stamp",
    material: "Megalodon Tooth",
    bonus: "% Fishing Exp",
    baseCoinCost: 1500,
    baseMatCost: 55,
    powCoinBase: 1.33,
    powMatBase: 9,
    diffRatio: 5,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Catch Net Stamp",
    material: "Goldfish",
    bonus: "Catching Efficiency",
    baseCoinCost: 1000,
    baseMatCost: 50,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 5,
    par1: 2,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Fly Intel Stamp",
    material: "Crabby Cakey",
    bonus: "% Catching Exp",
    baseCoinCost: 1500,
    baseMatCost: 40,
    powCoinBase: 1.33,
    powMatBase: 10,
    diffRatio: 5,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Bag o Heads Stamp",
    material: "Butterfly",
    bonus: "% Fish Carry Cap",
    baseCoinCost: 1000,
    baseMatCost: 35,
    powCoinBase: 1.3,
    powMatBase: 7,
    diffRatio: 8,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Holy Mackerel Stamp",
    material: "Platinum Ore",
    bonus: "% Multifish Chance",
    baseCoinCost: 1500,
    baseMatCost: 30,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 5,
    par1: 20,
    par2: 40,
    growthFunc: Growth.Decay,
  },
  {
    name: "Bugsack Stamp",
    material: "Hermit Can",
    bonus: "% Bug Carry Cap",
    baseCoinCost: 1000,
    baseMatCost: 35,
    powCoinBase: 1.3,
    powMatBase: 7,
    diffRatio: 8,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Buzz Buzz Stamp",
    material: "Potty Rolls",
    bonus: "% Multibug Chance",
    baseCoinCost: 1500,
    baseMatCost: 45,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 5,
    par1: 20,
    par2: 40,
    growthFunc: Growth.Decay,
  },
  {
    name: "Hidey Box Stamp",
    material: "Crabbo",
    bonus: "Trapping Efficiency",
    baseCoinCost: 7500,
    baseMatCost: 100,
    powCoinBase: 1.3,
    powMatBase: 5,
    diffRatio: 10,
    par1: 2,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Purp Froge Stamp",
    material: "Scorpie",
    bonus: "% Shiny Chance",
    baseCoinCost: 10000,
    baseMatCost: 125,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 5,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Spikemouth Stamp",
    material: "Mousey",
    bonus: "% Trapping Exp",
    baseCoinCost: 12500,
    baseMatCost: 150,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 3,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Shiny Crab Stamp",
    material: "Owlio",
    bonus: "% Shiny Chance",
    baseCoinCost: 15000,
    baseMatCost: 200,
    powCoinBase: 1.3,
    powMatBase: 7,
    diffRatio: 3,
    par1: 2,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Gear Stamp",
    material: "Sticky Stick",
    bonus: "% Building Spd",
    baseCoinCost: 10000,
    baseMatCost: 100,
    powCoinBase: 1.3,
    powMatBase: 5,
    diffRatio: 3,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Stample Stamp",
    material: "Floof Ploof",
    bonus: "% Sample Size",
    baseCoinCost: 10000,
    baseMatCost: 100,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 4,
    par1: 4,
    par2: 30,
    growthFunc: Growth.Decay,
  },
  {
    name: "Saw Stamp",
    material: "Dementia Bar",
    bonus: "% Construction Exp",
    baseCoinCost: 15000,
    baseMatCost: 20,
    powCoinBase: 1.3,
    powMatBase: 5,
    diffRatio: 3,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Amplestample Stamp",
    material: "Mosquisnow",
    bonus: "% Sample Size",
    baseCoinCost: 25000,
    baseMatCost: 200,
    powCoinBase: 1.3,
    powMatBase: 11,
    diffRatio: 4,
    par1: 5,
    par2: 30,
    growthFunc: Growth.Decay,
  },
  {
    name: "SpoOoky Stamp",
    material: "Forest Soul",
    bonus: "Worship Efficiency",
    baseCoinCost: 7500,
    baseMatCost: 45,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 10,
    par1: 2,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Flowin Stamp",
    material: "Redox Salts",
    bonus: "% Charging Speed",
    baseCoinCost: 15000,
    baseMatCost: 2,
    powCoinBase: 1.3,
    powMatBase: 5,
    diffRatio: 2,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Prayday Stamp",
    material: "Cracked Glass",
    bonus: "% Max Charge",
    baseCoinCost: 10000,
    baseMatCost: 150,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 2,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Banked Pts Stamp",
    material: "Dune Soul",
    bonus: "Starting TD Pts",
    baseCoinCost: 6000,
    baseMatCost: 100,
    powCoinBase: 1.3,
    powMatBase: 3,
    diffRatio: 6,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
];

const MiscStamps: Stamp[] = [
  {
    name: "Questin Stamp",
    material: "Slime Sludge",
    bonus: "% Quest EXP",
    baseCoinCost: 500,
    baseMatCost: 30,
    powCoinBase: 1.32,
    powMatBase: 6,
    diffRatio: 10,
    par1: 70,
    par2: 50,
    growthFunc: Growth.Decay,
  },
  {
    name: "Mason Jar Stamp",
    material: "Glass Shard",
    bonus: "% All Carry Cap",
    baseCoinCost: 4000,
    baseMatCost: 1,
    powCoinBase: 1.28,
    powMatBase: 3,
    diffRatio: 4,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Crystallin",
    material: "Boring Brick",
    bonus: "% Crystal Monster Spawn Chance",
    baseCoinCost: 800,
    baseMatCost: 35,
    powCoinBase: 1.31,
    powMatBase: 8,
    diffRatio: 10,
    par1: 110,
    par2: 50,
    growthFunc: Growth.Decay,
  },
  {
    name: "Apple Stamp",
    material: "Meat Pie",
    bonus: "% HP Food Effect",
    baseCoinCost: 200,
    baseMatCost: 50,
    powCoinBase: 1.3,
    powMatBase: 5.5,
    diffRatio: 5,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Potion Stamp",
    material: "Icing Ironbite",
    bonus: "% Boost Food Effect",
    baseCoinCost: 1500,
    baseMatCost: 50,
    powCoinBase: 1.305,
    powMatBase: 8,
    diffRatio: 5,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Golden Apple Stamp",
    material: "Golden Nomwich",
    bonus: "% Gold Food Effect",
    baseCoinCost: 3000,
    baseMatCost: 2,
    powCoinBase: 1.3,
    powMatBase: 4,
    diffRatio: 4,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Card Stamp",
    material: "Furled Flag",
    bonus: "% Card Drop Rate",
    baseCoinCost: 1200,
    baseMatCost: 25,
    powCoinBase: 1.31,
    powMatBase: 6,
    diffRatio: 10,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Talent I Stamp",
    material: "Frog Leg",
    bonus: "Talent 1 Pts",
    baseCoinCost: 50,
    baseMatCost: 25,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 2,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Talent II Stamp",
    material: "Pincer Arm",
    bonus: "Talent 2 Pts",
    baseCoinCost: 4000,
    baseMatCost: 200,
    powCoinBase: 1.35,
    powMatBase: 8,
    diffRatio: 2,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Talent III Stamp",
    material: "Arctic Leaf",
    bonus: "Talent 3 Pts",
    baseCoinCost: 40000,
    baseMatCost: 20,
    powCoinBase: 1.35,
    powMatBase: 4,
    diffRatio: 2,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Talent IV Stamp",
    material: "Copper Ore",
    bonus: "Talent 4 Pts",
    baseCoinCost: 50,
    baseMatCost: 25,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 2,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Talent V Stamp",
    material: "Copper Ore",
    bonus: "Talent 5 Pts",
    baseCoinCost: 50,
    baseMatCost: 25,
    powCoinBase: 1.3,
    powMatBase: 6,
    diffRatio: 2,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Talent S Stamp",
    material: "Twisty Leaf",
    bonus: "Star Talent Pts",
    baseCoinCost: 50,
    baseMatCost: 20,
    powCoinBase: 1.3,
    powMatBase: 4,
    diffRatio: 2,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Multikill Stamp",
    material: "Spore Cap",
    bonus: "% Base Overkill",
    baseCoinCost: 10000,
    baseMatCost: 100,
    powCoinBase: 1.3,
    powMatBase: 3,
    diffRatio: 2,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
  {
    name: "Biblio Stamp",
    material: "Tundra Logs",
    bonus: "% Faster Books",
    baseCoinCost: 12500,
    baseMatCost: 125,
    powCoinBase: 1.3,
    powMatBase: 5,
    diffRatio: 2,
    par1: 1,
    par2: 0,
    growthFunc: Growth.Add,
  },
];




export const Stamps: Stamp[] = [...CombatStamps, ...SkillStamps, ...MiscStamps];

type Bribe = {
  name: string;
  cost: number;
};

export const Bribes: Bribe[] = [
  {
    name: "Insider Trading",
    cost: 750,
  },
  {
    name: "Tracking Chips",
    cost: 1800,
  },
  {
    name: "Mandatory Fire Sale",
    cost: 3200,
  },
  {
    name: "Sleeping On The Job",
    cost: 6000,
  },
  {
    name: "Artificial Demand",
    cost: 9000,
  },
  {
    name: "The Art of the Deal",
    cost: 15000,
  },
  {
    name: "Overstock Regulations",
    cost: 20000,
  },
  {
    name: "Double EXP Scheme",
    cost: 222222,
  },
  {
    name: "Tagged Indicators",
    cost: 30000,
  },
  {
    name: "Fossil Fuel Legislation",
    cost: 55000,
  },
  {
    name: "Fice Aces in the Deck",
    cost: 70000,
  },
  {
    name: "Fake Teleport Tickets",
    cost: 99000,
  },
  {
    name: "The Art of the Steal",
    cost: 200000,
  },
  {
    name: "Counterfeit Telepassports",
    cost: 300000,
  },
  {
    name: "Weighted Marbles",
    cost: 725000,
  },
  {
    name: "Changing the Code",
    cost: 1500000,
  },
  {
    name: "Taxidermied Cog Pouches",
    cost: 750000,
  },
  {
    name: "Guild VIP Fraud",
    cost: 400000,
  },
  {
    name: "Library Double Agent",
    cost: 9156348,
  },
  {
    name: "The Art of the Fail",
    cost: 99999999,
  },
];

export function useStamps() {
  const calculateStampCoinCost = (s: Stamp, lvl: number): number => {
    return Math.floor(
      s.baseCoinCost *
        Math.pow(
          s.powCoinBase - (+lvl / (+lvl + 5 * s.diffRatio)) * 0.25,
          lvl * (10 / s.diffRatio)
        )
    );
  };

  const calculateStampMaterialsCost = (s: Stamp, lvl: number): number => {
    return (
      Math.floor(
        s.baseMatCost *
          Math.pow(
            s.powMatBase,
            Math.pow(Math.round(lvl / s.diffRatio - 1), 0.8)
          )
      ) || 0
    );
  };

  const calculateStampBonus = (s: Stamp, lvl: number): number => {
    return s.growthFunc(lvl, s.par1, s.par2);
  };

  return {
    calculateStampCoinCost,
    calculateStampMaterialsCost,
    calculateStampBonus,
  };
}
