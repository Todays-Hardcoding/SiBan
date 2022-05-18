import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { FlatGrid } from "react-native-super-grid";

const Level2 = ({route}) => {
  const { result } = route.params;

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    setExercises([...result])
  }, [])

  // const [exercises, setExercises] = useState([]);

  // useEffect(() => {
  //   const _url = "http://112.172.225.17:8282";
  //   fetch(_url + "/Course.act", {
  //     method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         workoutCourse : "중급",
  //       }),
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setExercises(data);
  //     });
  // }, []);

  return (
    <View style={styles.Container}>
      <Text style={styles.headerText}>{exercises.length}개의 운동</Text>
      <FlatGrid
        itemDimension={200}
        data={exercises}
        spacing={20}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemContainer, { backgroundColor: "lightgrey" }]}
          >
            <View style={styles.itmeimageContainer}></View>
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
  },
  itemTextContainer: {
    flex: 1.5,
    justifyContent: "center",
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
