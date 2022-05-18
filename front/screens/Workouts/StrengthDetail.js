import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const StrengthDetail = ({ route }) => {
  const { exercise } = route.params;
  // 콘솔 안나옴
  console.log(exercise.workoutName);
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
        <Text>{exercise.workoutName}</Text>
        <Text>{exercise.workout_course}</Text>
        <Text>{exercise.workout_goal}</Text>
        <Text>{exercise.workout_target}</Text>
        <Text>{exercise.workout_description}</Text>
        <Text>{exercise.workout_regdate}</Text>
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
