export class Team {
  /*
            A class to represent a 5 a side team.
            */
  constructor() {
    this.team = [];
  }

  fitness() {
    /*
              Function calculates average fitness of team.
              */
    var fitness_average;
    fitness_average = 0;

    for (let i = 0; i < this.team.length; i++) {
      player = this.team[i];
      fitness_average += player.fitness;
    }

    fitness_average /= this.team.length;
    return fitness_average;
  }

  defense() {
    /*
              Function calculates average defense of team.
              */
    var defense_average;
    defense_average = 0;

    for (let i = 0; i < this.team.length; i++) {
      player = this.team[i];
      defense_average += player.defense;
    }

    defense_average /= this.team.length;
    return defense_average;
  }

  attack() {
    /*
              Function calculates average attack of team.
              */
    var attack_average;
    attack_average = 0;

    for (let i = 0; i < this.team.length; i++) {
      player = this.team[i];
      attack_average += player.attack;
    }

    attack_average /= this.team.length;
    return attack_average;
  }

  ability() {
    /* 
      Function calculates average ability of team.
      */
    var ability_average;
    ability_average = 0;

    for (let i = 0; i < this.team.length; i++) {
      player = this.team[i];
      ability_average += player.ability;
    }

    ability_average /= this.team.length;
    return ability_average;
  }
}
