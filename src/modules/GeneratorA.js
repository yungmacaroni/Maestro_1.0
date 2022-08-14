import * as React from "react";
import { View, Text } from "react-native";
import { styles } from "../components/Styles";
import { Team } from "../classes/Team";

// Advanced generator

export const GeneratorA = ({ route, navigation }) => {
  const { playerData } = route.params;
  function create_teams() {
    /*
          A function to randomly assign players to teams.
          */
    var value;

    for (var playerName in playerData) {
      player = playerData[playerName];
      value = Math.random();

      if (
        (value >= 0.5 ||
          Team2.team.length === Object.keys(playerData).length / 2) &&
        Team1.team.length < Object.keys(playerData).length / 2
      ) {
        Team1.team.push(player);
      } else {
        if (
          value < 0.5 ||
          Team1.team.length >= Object.keys(playerData).length / 2
        ) {
          Team2.team.push(player);
        }
      }
    }
  }

  Team1 = new Team();
  Team2 = new Team();

  var a,
    attack_condition1,
    attack_condition2,
    attack_diff,
    attack_diff_new,
    changed,
    d,
    defense_condition1,
    defense_condition2,
    defense_diff,
    defense_diff_new,
    f,
    fitness_difference,
    fitness_difference_new,
    iterations,
    fitness_difference = 2;
  attack_diff = 2;
  defense_diff = 2;
  iterations = 0;
  changed = false;

  while (iterations < 10000) {
    Team1.team = [];
    Team2.team = [];
    create_teams();
    fitness_difference_new = Math.abs(Team1.fitness() - Team2.fitness());
    attack_diff_new = Math.abs(Team1.attack() - Team2.attack());
    defense_diff_new = Math.abs(Team1.defense() - Team2.defense());
    attack_condition1 = Team1.attack() > Team2.attack();
    defense_condition1 = Team1.defense() > Team2.defense();
    attack_condition2 = Team2.attack() > Team1.attack();
    defense_condition2 = Team2.defense() > Team1.defense();

    /*
        The following code works as such:
         Conditions 1 & 2 - if a team has both a higher attack
        and defense average than the other, the loop restarts.
         Conditions 3-6 - if one team has a higher defence and the other
        team does not have a higher attack, the loop restarts (and vice versa).
         */

    if (attack_condition1 && defense_condition1) {
      iterations += 1;
      {
        continue;
      }
    } else {
      if (attack_condition2 && defense_condition2) {
        iterations += 1;
        {
          continue;
        }
      } else {
        if (attack_condition1 && defense_condition2 === false) {
          iterations += 1;
          {
            continue;
          }
        } else {
          if (attack_condition2 && defense_condition1 === false) {
            iterations += 1;
            {
              continue;
            }
          } else {
            if (defense_condition1 && attack_condition2 === false) {
              iterations += 1;
              {
                continue;
              }
            } else {
              if (defense_condition2 && attack_condition1 === false) {
                iterations += 1;
                {
                  continue;
                }
              }
            }
          }
        }
      }
    }

    d = defense_diff_new <= defense_diff;
    a = attack_diff_new <= attack_diff;
    f = fitness_difference_new <= fitness_difference;

    if (iterations == 9999) {
      iterations = 9950;
      defense_diff += 1;
      attack_diff += 1;
      fitness_difference += 1;
      console.log("Values increased");
    }

    if (d && a && f) {
      defense_diff = defense_diff_new;
      attack_diff = attack_diff_new;
      fitness_difference = fitness_difference_new;
      var Team1_new = Team1.team;
      var Team2_new = Team2.team;
      changed = true;
    } else {
      iterations += 1;
      {
        continue;
      }
    }
  }

  if (changed == true) {
    Team1.team = Team1_new;
    Team2.team = Team2_new;
  }

  fitness_difference = Math.abs(Team1.fitness() - Team2.fitness());
  attack_diff = Math.abs(Team1.attack() - Team2.attack());
  defense_diff = Math.abs(Team1.defense() - Team2.defense());
  var sAttack = `Difference in attack: ${Math.round(attack_diff * 10) / 10} `;

  if (Team1.attack() > Team2.attack()) {
    sAttack += "Team 1 >\n";
  } else {
    if (Team2.attack() > Team1.attack()) {
      sAttack += "Team 2 >\n";
    } else {
      if (attack_diff === 0.0) {
        sAttack += "Equal attack!\n";
      }
    }
  }

  var sDefense = `Difference in defence: ${
    Math.round(defense_diff * 10) / 10
  } `;

  if (Team1.defense() > Team2.defense()) {
    sDefense += "Team 1 >\n";
  } else {
    if (Team2.defense() > Team1.defense()) {
      sDefense += "Team 2 >\n";
    } else {
      if (defense_diff === 0.0) {
        sDefense += "Equal defense!\n";
      }
    }
  }

  var sFitness = `Difference in fitness: ${
    Math.round(fitness_difference * 10) / 10
  } `;

  if (Team1.fitness() > Team2.fitness()) {
    sFitness += "Team 1 >\n";
  } else {
    if (Team2.fitness() > Team1.fitness()) {
      sFitness += "Team 2 >\n";
    } else {
      if (fitness_difference === 0.0) {
        sFitness += "Equal fitness!\n";
      }
    }
  }
  var team1Text = [];
  var team2Text = [];

  for (var i = 0; i < Team1.team.length; i++) {
    player = Team1.team[i];
    team1Text.push(player.name.toString());
    if (i != Team1.team.length - 1) {
      team1Text.push("\n");
    }
  }

  for (var i = 0; i < Team2.team.length; i++) {
    player = Team2.team[i];
    team2Text.push(player.name.toString());
    if (i != Team2.team.length - 1) {
      team2Text.push("\n");
    }
  }

  if (changed === false) {
    console.log("\nTeams not optimised, change initiating values.");
  }
  for (var playerInfo in playerData) {
    delete route.params.playerData[playerInfo];
  }

  return (
    <View style={styles.generatorContainer}>
      <View
        style={{
          flex: 4,
          justifyContent: "space-between",
          width: "90%",
          marginVertical: 8,
        }}
      >
        <Text style={styles.promptText}>Teams generated!</Text>
        <View style={styles.teamsDisplayContainer}>
          <Text style={styles.buttonText}>{team1Text}</Text>
          <Text style={styles.teamDisplayText}>VS</Text>
          <Text style={styles.buttonText}>{team2Text}</Text>
        </View>
        <View style={styles.skillDifferenceContainer}>
          <Text style={styles.teamDisplayText}>{sFitness}</Text>
          <Text style={styles.teamDisplayText}>{sAttack}</Text>
          <Text style={styles.teamDisplayText}>{sDefense}</Text>
        </View>
      </View>
    </View>
  );
};
