import * as React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { styles } from "../components/Styles";

export const HomeScreen = ({ navigation }) => {
  function generateData(val) {
    var playerID = [];
    for (let i = 0; i < val; i++) {
      playerID[i] = { id: Math.random().toString() };
    }
    return playerID;
  }

  const [selectedValue, setSelectedValue] = useState(null);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("Refreshed");
    });
    return unsubscribe;
  }, [navigation]);

  function sendPlayersQuick() {
    if (selectedValue != null) {
      navigation.navigate("QuickGenerator", {
        playerID: generateData(selectedValue),
      });
    } else {
      Alert.alert("Please choose number of players.");
    }
  }

  function sendPlayersAdvanced() {
    if (selectedValue != null) {
      navigation.navigate("AdvancedGenerator", {
        playerID: generateData(selectedValue),
      });
    } else {
      Alert.alert("Please choose number of players.");
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={styles.playerNumberPickerContainer}>
            <Picker
              style={styles.noOfPlayersPicker}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Number of players:" value={null} />
              <Picker.Item label="6" value={6} />
              <Picker.Item label="8" value={8} />
              <Picker.Item label="10" value={10} />
              <Picker.Item label="12" value={12} />
              <Picker.Item label="14" value={14} />
            </Picker>
          </View>
          <Pressable style={styles.button} onPress={sendPlayersQuick}>
            <Text style={styles.buttonText}>Quick generator</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={sendPlayersAdvanced}>
            <Text style={styles.buttonText}>Advanced generator</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};
