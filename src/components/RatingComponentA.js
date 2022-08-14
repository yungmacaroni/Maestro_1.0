import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Player } from "./Player";

// Component represents player info user input for advanced generator.

var players = {};

export default function RatingComponentA(props) {
  //setting values for text input/ pickers.
  const [playerName, setPlayerName] = useState("");
  const [dictKey, setDictKey] = useState("");
  const [fitnessValue, setSelectedValueF] = useState(null);
  const [attackValue, setSelectedValueA] = useState(null);
  const [defenseValue, setSelectedValueD] = useState(null);

  function nameHandler(name) {
    delete players[dictKey];
    setPlayerName(name);
    setDictKey(name);
  }

  function fitnessPicker(valueF) {
    setSelectedValueF(valueF);
  }

  function attackPicker(valueA) {
    setSelectedValueA(valueA);
  }

  function defensePicker(valueD) {
    setSelectedValueD(valueD);
  }
  function dataHandler(players) {
    props.onRender(players);
  }

  function dataCleaner(value) {
    props.setRefreshed(value);
  }

  if (
    dictKey != "" &&
    fitnessValue != null &&
    attackValue != null &&
    defenseValue != null
  ) {
    players[dictKey] = new Player(
      playerName,
      fitnessValue,
      attackValue,
      defenseValue
    );
  }

  if (props.dataHandled == false) {
    dataHandler(players);
  }

  if (props.isButtonPressed) {
    players = {};
  }

  if (props.refreshed) {
    players = {};
    dataCleaner(false);
  }

  return (
    <View style={styles.ratingContainer}>
      <TextInput
        placeholder="Player Name"
        onChangeText={nameHandler}
        value={playerName}
        style={styles.inputText}
      />
      <View style={styles.dropdownContainer}>
        <View style={styles.ratingPickerContainer}>
          <Picker
            style={styles.pickerStyle}
            mode="dropdown"
            selectedValue={fitnessValue}
            onValueChange={fitnessPicker}
          >
            <Picker.Item label="Fitness" value={null} />
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
            <Picker.Item label="5" value={5} />
            <Picker.Item label="6" value={6} />
            <Picker.Item label="7" value={7} />
            <Picker.Item label="8" value={8} />
            <Picker.Item label="9" value={9} />
            <Picker.Item label="10" value={10} />
          </Picker>
        </View>
        <View style={styles.ratingPickerContainer}>
          <Picker
            style={styles.pickerStyle}
            mode="dropdown"
            selectedValue={attackValue}
            onValueChange={attackPicker}
          >
            <Picker.Item label="Attack" value={null} />
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
            <Picker.Item label="5" value={5} />
            <Picker.Item label="6" value={6} />
            <Picker.Item label="7" value={7} />
            <Picker.Item label="8" value={8} />
            <Picker.Item label="9" value={9} />
            <Picker.Item label="10" value={10} />
          </Picker>
        </View>
        <View style={styles.ratingPickerContainer}>
          <Picker
            style={styles.pickerStyle}
            mode="dropdown"
            selectedValue={defenseValue}
            onValueChange={defensePicker}
          >
            <Picker.Item label="Defense" value={null} />
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
            <Picker.Item label="5" value={5} />
            <Picker.Item label="6" value={6} />
            <Picker.Item label="7" value={7} />
            <Picker.Item label="8" value={8} />
            <Picker.Item label="9" value={9} />
            <Picker.Item label="10" value={10} />
          </Picker>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer: {
    width: "100%",
    paddingTop: 8,
    justifyContent: "space-between",
    padding: 2,
  },
  inputText: {
    textAlign: "center",
    width: "100%",
    paddingLeft: 4,
    fontSize: 16,
    borderColor: "#1b411f",
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 2,
  },
  dropdownContainer: {
    flex: 1,
    flexDirection: "row",
  },
  ratingPickerContainer: {
    flex: 1,
    height: "70%",
    borderColor: "#1b411f",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 8,
    borderWidth: 2,
  },
  pickerStyle: {
    width: "100%",
    height: 40,
    transform: [{ scaleX: 1 }, { scaleY: 1 }],
  },
});
