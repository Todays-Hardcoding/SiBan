import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { FlatGrid } from "react-native-super-grid";

const Browse = ({ navigation }) => {
  const [text, setText] = useState("");
  const [exercises, setExercises] = useState([]);
  const [Group, setGroup] = useState([
    { name: "근력", code: "Strength", explane: "숨은 근육 강화 & 탄력 높이기" },
    { name: "지구력", code: "Endurance", explane: "심폐 기능 & 체력 단련" },
    { name: "활동성", code: "Mobility", explane: "유연성 기르기" },
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

  return (
    <View style={styles.Container}>
      <TextInput
        value={text}
        placeholder="검색"
        style={styles.inputContainer}
        inlineImageLeft="search_icon"
      />
      <FlatGrid
        itemDimension={190}
        data={Group}
        spacing={20}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemContainer, { backgroundColor: "grey" }]}
            onPress={() => {
              navigation.navigate("BrowseDetail", { screen: item.code });
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
    marginHorizontal: 20,
    marginTop: 20,
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

export default Browse;
