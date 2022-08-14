import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Styles";

// Component renders the main title at the top of each screen.

export default function LogoTitle() {
  return (
    <View style={styles.titleBar}>
      <Text style={styles.titleText}>Maestro</Text>
    </View>
  );
}
