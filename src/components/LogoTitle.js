import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Styles";

export default function LogoTitle() {
  return (
    <View style={styles.titleBar}>
      <Text style={styles.titleText}>Maestro</Text>
    </View>
  );
}
