import * as React from "react";
import { View, Text } from "react-native";
import { Team } from "../components/Team";
import { styles } from "../components/Styles";

export const GeneratorQ = ({ route, navigation }) => {
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

  var changed,
    iterations,
    ability_diff_new,
    ability_diff = 2;
  iterations = 0;
  changed = false;

  while (iterations < 10000) {
    Team1.team = [];
    Team2.team = [];
    create_teams();
    ability_diff_new = Math.abs(Team1.ability() - Team2.ability());

    if (ability_diff_new < ability_diff) {
      ability_diff = ability_diff_new;

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

  for (var playerInfo in route.params.playerData) {
    delete route.params.playerData[playerInfo];
  }

  if (changed == true) {
    Team1.team = Team1_new;
    Team2.team = Team2_new;
  }

  ability_diff = Math.abs(Team1.ability() - Team2.ability());

  var sAbility = `Difference in ability: ${
    Math.round(ability_diff * 10) / 10
  } `;

  if (Team1.ability() > Team2.ability()) {
    sAbility += "Team 1 >\n";
  } else {
    if (Team2.ability() > Team1.ability()) {
      sAbility += "Team 2 >\n";
    } else {
      if (ability_diff === 0.0) {
        sAbility += "Equal ability!\n";
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
      </View>
      <View style={styles.skillDifferenceContainer}>
        <Text style={styles.teamDisplayText}>{sAbility}</Text>
      </View>
    </View>
  );
};
