export class Player {
    constructor(name, fitness, attack, defense, ability) {
      this.name = name;
      this.fitness = Number.parseInt(fitness);
      this.attack = Number.parseInt(attack);
      this.defense = Number.parseInt(defense);
      this.ability = Number.parseInt(ability);
    }
  
    static QuickPlayer(name, ability) {
      return new Player(name, null, null, null, ability);
    }
  }
  