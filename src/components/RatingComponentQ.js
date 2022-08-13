import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Player } from "./Player";

var players = {};

export default function RatingComponentQ(props) {
  const [playerName, setPlayerName] = useState("");
  const [dictKey, setDictKey] = useState("");
  const [abilityValue, setSelectedValue] = useState(null);

  function nameHandler(name) {
    delete players[dictKey];
    setPlayerName(name);
    setDictKey(name);
  }

  function abilityPicker(valueA) {
    delete players[dictKey];
    setSelectedValue(valueA);
  }

  function dataHandler(players) {
    props.onSubmit(players);
  }

  function dataCleaner(value) {
    props.setRefreshed(value)
  }

  if (dictKey != "" && abilityValue != null) {
    players[dictKey] = Player.QuickPlayer(playerName, abilityValue);
  }

  if (props.dataHandled == false) {
    dataHandler(players);
  }

  if (props.isButtonPressed) {
    players = {};
  }

  if (props.refreshed) {
    players = {};
    dataCleaner(false)
  }

  return (
    <View style={styles.ratingContainer}>
      <TextInput
        placeholder="Player Name"
        onChangeText={nameHandler}
        value={playerName}
        style={styles.inputText}
      />
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.pickerStyle}
          mode="dropdown"
          selectedValue={abilityValue}
          onValueChange={abilityPicker}
        >
          <Picker.Item label="Ability" value={null} />
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
  );
}

const styles = StyleSheet.create({
  ratingContainer: {
    paddingTop: 8,
    width: "80%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 0,
  },
  inputText: {
    flex: 3,
    paddingLeft: 4,
    fontSize: 16,
    borderColor: "#1b411f",
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 2,
  },
  pickerContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#1b411f",
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 2,
  },
  pickerStyle: {
    width: 110,
  },
});
