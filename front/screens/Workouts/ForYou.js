import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ForYou = ({ navigation }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LevelNav", { screen: "LEVEL1" });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>초급</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LevelNav", { screen: "LEVEL2" });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>중급</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LevelNav", { screen: "LEVEL3" });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>고급</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 100,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#575fcf",
    borderRadius: 50,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 30,
    color: "white",
  },
});

export default ForYou;
