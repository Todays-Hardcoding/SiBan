import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { FlatGrid } from "react-native-super-grid";

const WorkoutSearch = ({ navigation }) => {
  const [exercises, setExercises] = useState([]);
  const [result, setResult] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const _url = "http://112.172.225.17:8282";
    fetch(_url + "/FindAll.act", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setExercises(data);
      });
  }, []);

  const search = () => {
    const newResult = new Array();
    exercises.map((exercise) => {
      if (exercise.workoutName.includes(text)) {
        newResult.push(exercise);
      }
    });
    setResult([...newResult]);
  };

  return (
    <View style={styles.Container}>
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        onSubmitEditing={search}
        placeholder="검색"
        style={styles.inputContainer}
        inlineImageLeft="search_icon"
      />
      <FlatGrid
        itemDimension={200}
        data={result}
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

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  inputContainer: {
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "lightgrey",
    borderRadius: 20,
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

export default WorkoutSearch;
