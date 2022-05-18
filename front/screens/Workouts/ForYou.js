import React, { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatGrid } from "react-native-super-grid";

const ForYou = ({ navigation }) => {

  const [exercises, setExercises] = useState([]);
  const [result, setResult] = useState([]);
  const [courses, setCourses] = useState([
    {
      screen: "Level1",
      course: "초급",
      explane: "초보자들에게 추천하는 코스입니다.",
    },
    {
      screen: "Level2",
      course: "중급",
      explane: "경력 1년차 이상 코스입니다.",
    },
    {
      screen: "Level3",
      course: "고급",
      explane: "더 높은 퍼포먼스를 추구한다면",
    },
  ]);

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

  const sendData = (item) => {
    const newResult = new Array();
    exercises.map((exercise) => {
      if (exercise.workoutCourse === item.course) {
        newResult.push(exercise);
      }
    });
    setResult([...newResult]);

    navigation.navigate("LevelDetail", {
      screen: item.screen,
      params: {result : result}
    })

  }

  return (
    <View style={styles.Container}>
      <FlatGrid
        itemDimension={190}
        data={courses}
        spacing={20}
        marginTop={20}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemContainer, { backgroundColor: "grey" }]}
            onPress={() =>
              sendData(item)
            }
          >
            <Text style={styles.itemName}>{item.course}</Text>
            <Text style={styles.itemExplane}>{item.explane}</Text>
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
    margin: 20,
    backgroundColor: "lightgrey",
    borderRadius: 20,
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
    color: "#fff",
  },
  itemExplane: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
});

export default ForYou;
