class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 50;
    this.attack = 40;
    this.defence = 30;
  }

  levelUp() {
    this.level = this.level + 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }
}

const character = new Character('Маг');
console.log(character);
character.levelUp();
console.log(character);