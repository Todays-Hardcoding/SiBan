import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ForYou = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("LevelDetail", { screen: "Level1" });
        }}
      >
        <Text style={styles.buttonText}>초급</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("LevelDetail", { screen: "Level2" });
        }}
      >
        <Text style={styles.buttonText}>중급</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("LevelDetail", { screen: "Level3" });
        }}
      >
        <Text style={styles.buttonText}>고급</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "600",
  },
});

export default ForYou;
