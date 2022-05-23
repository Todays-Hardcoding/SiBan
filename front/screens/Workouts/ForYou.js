import React, { useEffect } from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";

const ForYou = ({ navigation }) => {
  const [courses, setCourses] = useState([
    {
      screen: "Level1",
      course: "초급",
      explane: "초보자들에게 추천하는 코스입니다.",
      src: require("../../assets/images/level1.png"),
    },
    {
      screen: "Level2",
      course: "중급",
      explane: "경력 1년차 이상 코스입니다.",
      src: require("../../assets/images/level2.png"),
    },
    {
      screen: "Level3",
      course: "고급",
      explane: "더 높은 퍼포먼스를 추구한다면",
      src: require("../../assets/images/level3.png"),
    },
  ]);

  return (
    <View style={styles.Container}>
      <FlatGrid
        itemDimension={230}
        data={courses}
        spacing={20}
        marginTop={20}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemContainer, { backgroundColor: "grey" }]}
            onPress={() =>
              navigation.navigate("LevelDetail", {
                screen: item.screen,
              })
            }
          >
            <Text style={styles.itemName}>{item.course}</Text>
            <Image style={styles.image} source={item.src}></Image>
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
    paddingTop: 40,
  },
  image: {
    resizeMode: "contain",
    width: 100,
    height: 100,
    justifyContent: "flex-end",
  },
  itemContainer: {
    flex: 1,
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
