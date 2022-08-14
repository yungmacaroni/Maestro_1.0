import * as React from "react";
import { StyleSheet } from "react-native";

// stylesheet used in all components and modules.

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2ffd4",
  },
  buttonContainer: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  playerNumberPickerContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#1b411f",
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 8,
    height: 40,
  },
  buttonText: {
    borderColor: "#1b411f",
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
    fontFamily: "Lemonada_400Regular",
    textAlign: "center",
  },
  button: {
    padding: 8,
    width: "60%",
  },
  flatlistContainer: {
    marginVertical: 8,
    width: "90%",
  },
  flatlistContainerQ: {
    marginVertical: 8,
    flex: 1,
    marginHorizontal: "10%",
  },
  interactionContainer: {
    flex: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 2,
  },
  promptText: {
    borderColor: "#1b411f",
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 8,
    padding: 2,
    marginTop: 6,
    fontFamily: "Lemonada_400Regular",
    textAlign: "center",
  },
  iconBar: {
    height: "8%",
    flexDirection: "row",
    paddingHorizontal: 8,
    backgroundColor: "#1b411f",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  homeIcon: {
    color: "white",
    alignItems: "center",
  },
  groupsIcon: {
    color: "white",
    alignItems: "center",
  },
  profileIcon: {
    color: "white",
    alignItems: "center",
  },
  titleBar: {
    width: "100%",
    backgroundColor: "#1b411f",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
  },
  titleText: {
    textAlign: "center",
    color: "white",
    fontFamily: "Lemonada_400Regular",
    fontSize: 30,
  },
  generatorContainer: {
    flex: 8,
    backgroundColor: "#e2ffd4",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  teamsDisplayContainer: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  skillDifferenceContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  noOfPlayersPicker: {
    height: 50,
    width: 200,
    alignItems: "center",
    fontFamily: "Lemonada_400Regular",
  },
  generateButton: {
    padding: 8,
    width: "40%",
  },
  generateButtonText: {
    borderColor: "white",
    backgroundColor: "#1b411f",
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
    fontFamily: "Lemonada_400Regular",
    color: "white",
    textAlign: "center",
  },
  teamDisplayText: {
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "Lemonada_400Regular",
  },
});
