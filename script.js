//variables
let xp = 0;
let health = 100;
let gold = 50;
let fighting = 0;
let monsterHealth;
let inventory = ["stick"];
let currentWeapon = 0;
let currentArmor = 0;

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

//weapon property
const weapons = [
  {
    name: "stick",
    level: 0,
    power: 5,
    value: 10,
  },
  {
    name: "dagger",
    level: 0,
    power: 30,
    value: 60,
  },
  {
    name: "claw hammer",
    level: 0,
    power: 50,
    value: 100,
  },
  {
    name: "sword",
    level: 0,
    power: 100,
    value: 200,
  },
];

//armor property
const armors = [
  {
    name: "wood armor",
    level: 0,
    defence: 5,
    value: 10,
  },
  {
    name: "stone armor",
    level: 0,
    defence: 30,
    value: 60,
  },
  {
    name: "iron armor",
    level: 0,
    defence: 50,
    value: 100,
  },
  {
    name: "nuclear armor",
    level: 0,
    defence: 100,
    value: 200,
  },
];

//monster property
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15,
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60,
  },
  {
    name: "dragon",
    level: 20,
    health: 300,
  },
];

//location property
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to hospital", "Go to cave"],
    "button functions": [goStore, goHospital, goCave],
    text: "You are in the town square. Where do you want to go?",
  },
  {
    name: "store",
    "button text": ["Armor", "Buy Weapon", "Go to town square"],
    "button functions": [armor, buyWeapon, goTown],
    text: "You enter the store. What would you like? ",
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters.",
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown], // Added the missing array
    text: "You are fighting " + monsters[fighting].name + ".",
  },
  {
    name: "armor store",
    "button text": [
      "Buy " + armors[currentArmor + 1].name,
      "Upgrade " + armors[currentArmor].name,
      "Sell armor",
    ],
    "button function": [buyArmor, upgradeArmor, sellArmor],
  },
];

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
//text update function
function uptadeText() {
  goldText.innerText = gold;
  healthText.innerText = health;
}

function updateweapon(weapon, x) {
  if (gold >= weapons[value][x]) {
  }
}

//go-location function
function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
  /* if (health == 100) {
    button1.style.background = "#fecc4c";
    button1.style.borderColor = "#fecc4c";
  }*/
}

function goCave() {
  update(locations[2]);
}
//buy health-weapon function
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
  if (currentWeapon < weapons.length - 1) {
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
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "MAX WEAPON";
  }
}
//fighting monsters function
function fightSlime() {
  fighting = 0;
}
function fightBeast() {
  fighting = 1;
}
function fightDragon() {
  fighting = 2;
}

//attack-defence functions
function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText +=
    " You attack it with your " + weapons[currentWeapon].name + ".";
}
function dodge() {}
function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsters[fighting].health;
}
function goHospital() {
  buyHealth();
}

function armor() {
  update(locations[4]);
}
function buyArmor() {
  if (currentWeapon < armors.length - 1) {
    if (gold >= armors[currentWeapon + 1].value) {
      gold -= armors[currentWeapon + 1].value;
      currentArmor++;
      updateText();
      let newArmor = armors[currentArmor].name;
      text.innerText = "You now have a " + newArmor + ".";
      inventory.push(newArmor);
      text.innerText += " In your inventory you have: " + inventory.toString();
    } else {
      text.innerText = "You do not have enough gold to buy a weapon!";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "MAX WEAPON";
  }
}
function sellArmor() {}
function upgradeArmor() {}
//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
