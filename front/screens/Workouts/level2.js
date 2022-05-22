import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { FlatGrid } from "react-native-super-grid";

const _url = "http://192.168.45.96:8282";

const Level2 = ({ navigation }) => {
  const [exercises, setExercises] = useState([]);
  const [courses, setCourses] = useState({
    src: require("../../assets/images/level2.png"),
  });

  useEffect(() => {
    fetch(_url + "/Course.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workoutCourse: "중급",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setExercises(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <View style={styles.Container}>
      <Text style={styles.headerText}>{exercises.length}개의 운동</Text>
      <FlatGrid
        itemDimension={230}
        data={exercises}
        spacing={20}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemContainer, { backgroundColor: "lightgrey" }]}
            onPress={() =>
              navigation.navigate("DetailPage", {
                result: item,
              })
            }
          >
            <View style={styles.itmeimageContainer}>
              <Image source={courses.src}></Image>
            </View>
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemName}>{item.workoutName}</Text>
              <Text style={styles.itemSummary}>
                {item.workoutCourse} - {item.workoutGoal}
              </Text>
              {/* <Text style={styles.itemCode}>{item.workoutDescription}</Text> */}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Level2;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  headerText: {
    color: "grey",
    marginHorizontal: 20,
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itmeimageContainer: {
    flex: 1,
    justifyContent: "center",
  },
  itemTextContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  itemName: {
    margin: 5,
    fontSize: 16,
    fontWeight: "600",
    color: "grey",
  },
  itemSummary: {
    margin: 5,
    fontSize: 12,
    fontWeight: "600",
    color: "grey",
  },
});
