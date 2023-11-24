// Soldier
class Soldier {

    constructor(health, strength) {

        this.health = health;
        this.strength = strength;
    }

attack(){

return this.strength;
}

receiveDamage(damage) {

    this.health -= damage;
}
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
receiveDamage(damage) {
this.health -= damage;

if (this.health > 0){
    return `${this.name} has received ${damage} points of damage`;
} else {
    return `${this.name} has died in act of combat`;
 }
}
battleCry() {
    return "Odin Owns You All!"
}
}


// Saxon
class Saxon extends Soldier {
receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
    } else {
        return `A Saxon has died in combat`;
    }
}
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {

        if (this.saxonArmy.length === 0) {
            return "Saxons have already been defeated!";
        }

        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const damage = randomViking.strength;
        const result = randomSaxon.receiveDamage(damage);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
return result;
    }

    saxonAttack() {

        if(this.vikingArmy.length === 0) {
            return "Vikings have already been defeated!";
        }

        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];

        const damage = randomSaxon.strength;

        const result = randomViking.receiveDamage(damage);

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);

        }
        return result;
    }

showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
          





const warInstance = new War();

const viking1 = new Viking ("Eivor Raveneye", 100, 30);
const viking2 = new Viking ("One-eyed Ingrid", 100, 35);
const viking3 = new Viking ("Leif The Butcer", 80, 40);
const viking4 = new Viking ("Gunnar", 120, 20);
const viking5 = new Viking ("Harald The Black", 100, 30);

const saxon1 = new Saxon ("Alwin The Brave", 70, 20);
const saxon2 = new Saxon ("Chad", 60, 15);
const saxon3 = new Saxon ("Cuthbert", 60, 10);
const saxon4 = new Saxon ("Edgar", 50, 15);
const saxon5 = new Saxon ("Edmund", 50, 15);
const saxon6 = new Saxon ("Edward", 60, 10);
const saxon7 = new Saxon ("Godwin", 50, 10);

warInstance.addViking(viking1);
warInstance.addViking(viking2);
warInstance.addViking(viking3);
warInstance.addViking(viking4);
warInstance.addViking(viking5);

warInstance.addSaxon(saxon1);
warInstance.addSaxon(saxon2);
warInstance.addSaxon(saxon3);
warInstance.addSaxon(saxon4);
warInstance.addSaxon(saxon5);
warInstance.addSaxon(saxon6);
warInstance.addSaxon(saxon7);

console.log(warInstance.vikingArmy);
console.log(warInstance.saxonArmy);


