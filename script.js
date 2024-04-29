//variables
const weapons = [
  {
    name: "stick",
    power: 5,
    value: 10,
  },
  {
    name: "dagger",
    power: 30,
    value: 60,
  },
  {
    name: "claw hammer",
    power: 50,
    value: 100,
  },
  {
    name: "sword",
    power: 100,
    value: 200,
  },
];
let currentWeapon = 0;
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. Where do you want to go?",
  },
  {
    name: "store",
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (" + weapons[currentWeapon + 1].value + " gold)",
      "Go to town square",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store. What would you like? ",
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters.",
  },
];
let xp = 0;
let health = 100;
let gold = 50;
let fighting;
let monsterHealth;
let inventory = ["stick"];

//buttons
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

//Texts
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

//functions

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}

function uptadeText() {
  goldText.innerText = gold;
  healthText.innerText = health;
}

function updateweapon(weapon, x) {
  if (gold >= weapons[value][x]) {
  }
}

function goTown() {
  update(locations[0]);
}
function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}
function fightDragon() {
  console.log("Fighting dragon.");
}
function buyHealth() {
  if (health == 100) {
    text.innerText = "Your health already full!";
    if (gold >= 10 && health < 100) {
      gold -= 10;
      health += Math.min(10, 100 - health);
      uptadeText();
    } else if (health == 100) {
      text.innerText = "Your health already full!";
    } else {
      text.innerText = "You do not have enough gold to buy health!";
    }
  }
}
function buyWeapon() {
  if (gold >= weapons[currentWeapon + 1].value) {
    gold -= weapons[currentWeapon + 1].value;
    currentWeapon++;
    updateText();
    let newWeapon = weapons[currentWeapon].name;
    text.innerText = "You now have a " + newWeapon + ".";
    inventory.push(newWeapon);
    text.innerText += " In your inventory you have: " + inventory.toString();
  } else {
    text.innerText = "You do not have enough gold to buy a weapon!";
  }
}
function fightSlime() {}
function fightBeast() {}

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
