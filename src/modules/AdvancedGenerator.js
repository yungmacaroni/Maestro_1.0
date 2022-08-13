import * as React from "react";
import { useState } from "react";
import { View, Text, ScrollView, Pressable, Alert } from "react-native";
import RatingComponentA from "../components/RatingComponentA";
import { styles } from "../components/Styles";

var playerData = {};

export const AdvancedGenerator = ({ route, navigation }) => {
  const { playerID } = route.params;

  const [isButtonPressed, setButtonPressed] = useState(false);
  const [teamsGenerated, setTeamsGenerated] = useState(false);
  const [dataHandled, setDataHandled] = useState(false);
  const [refreshed, setRefreshed] = useState(false);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("Refreshed");
      setDataHandled(false);
      setRefreshed(true);
      playerData = {};
    });
    return unsubscribe;
  }, [navigation]);

  function buttonPressed() {
    setButtonPressed(true);
  }

  function dataCleaner(value) {
    setRefreshed(value);
  }

  function dataHandler(players) {
    playerData = players;
    if (Object.keys(playerData).length == playerID.length) {
      setDataHandled(true);
      players = {};
    }
    if (teamsGenerated) {
      setTeamsGenerated(false);
    }
  }

  if (isButtonPressed) {
    if (Object.keys(playerData).length == playerID.length && dataHandled) {
      setTeamsGenerated(true);
      setButtonPressed(false);
      setDataHandled(false);
      navigation.navigate("GeneratorA", { playerData: playerData });
    } else {
      Alert.alert("Please complete all sections.");
      setDataHandled(false);
      setButtonPressed(false);
      playerData = {};
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.interactionContainer}>
        <Text style={styles.promptText}>Please fill in all areas.</Text>
        <ScrollView style={styles.flatlistContainer}>
          <View>
            {playerID.map(() => {
              return (
                <RatingComponentA
                  onRender={dataHandler}
                  dataHandled={dataHandled}
                  isButtonPressed={isButtonPressed}
                  teamsGenerated={teamsGenerated}
                  refreshed={refreshed}
                  setRefreshed={dataCleaner}
                />
              );
            })}
          </View>
        </ScrollView>
        <Pressable style={styles.generateButton} onPress={buttonPressed}>
          <Text style={styles.generateButtonText}>GENERATE</Text>
        </Pressable>
      </View>
    </View>
  );
};
