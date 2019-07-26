import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { ExpoConfigView } from "@expo/samples";

export default function SettingsScreen() {
  return (
    <ScrollView>
      <Text>This is sample text for now</Text>

    </ScrollView>
  );
}

SettingsScreen.navigationOptions = {
  title: "app.json"
};
