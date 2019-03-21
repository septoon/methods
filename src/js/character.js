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
    this.attack = this.attack + this.attack / 100 * 20;
    this.defence = this.defence + this.defence / 100 * 20;
    this.health = 100;
  }
}

export default Character;
