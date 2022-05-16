import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatGrid } from "react-native-super-grid";

const ForYou = ({ navigation }) => {
  const [courses, setCourses] = useState([
    {
      name: "초급",
      code: "Level1",
      explane: "초보자들에게 추천하는 코스입니다.",
    },
    { name: "중급", code: "Level2", explane: "경력 1년차 이상 코스입니다." },
    { name: "고급", code: "Level3", explane: "더 높은 퍼포먼스를 추구한다면" },
  ]);
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
            onPress={() => {
              navigation.navigate("LevelDetail", { screen: item.code });
            }}
          >
            <Text style={styles.itemName}>{item.name}</Text>
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
