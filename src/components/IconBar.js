import React from "react";
import { View, Alert, Pressable } from "react-native";
import {
  MaterialCommunityIcons,
  Foundation,
  MaterialIcons,
} from "@expo/vector-icons";
import { styles } from "./Styles";

export default function IconBar() {
  function onPress() {
    Alert.alert("This feature is not available yet");
  }
  return (
    <View style={styles.iconBar}>
      <Pressable onPress={onPress}>
        <Foundation name="home" size={40} style={styles.homeIcon} />
      </Pressable>
      <Pressable onPress={onPress}>
        <MaterialIcons name="groups" size={40} style={styles.groupsIcon} />
      </Pressable>
      <Pressable onPress={onPress}>
        <MaterialCommunityIcons
          name="account"
          size={40}
          style={styles.profileIcon}
        />
      </Pressable>
    </View>
  );
}
