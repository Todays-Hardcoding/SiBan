import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { FlatGrid } from "react-native-super-grid";

const Level1 = () => {

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const _url = "http://112.172.225.17:8282";
    fetch(_url + "/Course.act", {
      method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          workoutCourse : "초급",
        }),
    })
    .then((response) => response.json())
    .then((data) => {
      setExercises(data)
      });
  }, []);

  return (
    <View style={styles.Container}>
      <Text style={styles.text}>{exercises.length}개의 운동</Text>
      <FlatGrid
        itemDimension={170}
        data={exercises}
        spacing={20}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemContainer, { backgroundColor: "lightgrey" }]}
          >
            <Text style={styles.itemName}>{item.workoutName}</Text>
            <Text style={styles.itemCode}>{item.workoutTarget}</Text>
            <Text style={styles.itemCode}>{item.workoutDescription}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Level1;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  text: {
    color: "grey",
    marginHorizontal: 20,
    marginTop: 20,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "grey",
  },
  itemCode: {
    fontSize: 12,
    fontWeight: "600",
    color: "grey",
  },
});
