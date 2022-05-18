import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const StrengthDetail = ({ route }) => {
  const { exercise } = route.params;
  console.log(exercise);
  return (
    <View style={styles.Container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="bookmark" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{exercise.workoutname}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default StrengthDetail;
