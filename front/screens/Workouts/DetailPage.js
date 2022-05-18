import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const DetailPage = ({ route }) => {
  const { exercise } = route.params;
  // 콘솔 안나옴
  console.log(exercise.workoutName);
  return (
    <View style={styles.Container}>
      <View style={styles.secondContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <FontAwesome
              style={styles.headerBtn}
              name="arrow-left"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome
              style={styles.headerBtn}
              name="bookmark"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.workoutNameView}>
          <Text style={styles.workoutNameText}>{exercise.workoutName}</Text>
        </View>
        <View style={styles.workoutDescriptionView}>
          <Text style={styles.workoutDescriptionText}>
            {exercise.workoutDescription}
          </Text>
        </View>
        <Text>{exercise.workoutCourse}</Text>
        <Text>{exercise.workoutGoal}</Text>
        <Text>{exercise.workoutTarget}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#252525",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondContainer: { width: "90%", flex: 1 },
  headerBtn: { color: "white" },
  workoutNameView: {
    flex: 1,
    verticalAlign: "bottom",
    backgroundColor: "red",
  },
  workoutNameText: {
    fontSize: "50",
    fontWeight: "500",
    color: "white",
  },
  workoutDescriptionView: {
    flex: 1,
    backgroundColor: "#252525",
  },
  workoutDescriptionText: {
    color: "white",
    fontSize: "20",
    fontWeight: "500",
  },
  bodyContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailPage;
