export class Player {
  /*
     A class to represent a football player.
   */
  constructor(name, fitness, attack, defense, ability) {
    this.name = name;
    this.fitness = Number.parseInt(fitness);
    this.attack = Number.parseInt(attack);
    this.defense = Number.parseInt(defense);
    this.ability = Number.parseInt(ability);
  }

  // second constructor for only name and ability attributes.
  static QuickPlayer(name, ability) {
    return new Player(name, null, null, null, ability);
  }
}
