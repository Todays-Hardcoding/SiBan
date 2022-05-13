import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { FlatGrid } from "react-native-super-grid";

const Plans = ({ navigation }) => {
  const [myPlan, setMyPlan] = React.useState([
    { name: "BELIZE HOLE", code: "#2980b9" },
    { name: "WISTERIA", code: "#8e44ad" },
    { name: "MIDNIGHT BLUE", code: "#2c3e50" },
    { name: "SUN FLOWER", code: "#f1c40f" },
    { name: "CARROT", code: "#e67e22" },
    { name: "ALIZARIN", code: "#e74c3c" },
    { name: "CLOUDS", code: "#ecf0f1" },
  ]);
  const [text, setText] = useState("");
  const addPlan = () => {
    try {
      if (text === "") {
        return;
      }
      const newMyPlan = {
        ...myPlan,
        [Date.now()]: { text },
      };
      setMyPlan(newMyPlan);
      setText("");
    } catch (e) {}
  };
  const deletePlan = (key) => {
    Alert.alert("삭제하시겠습니까?", "정말로?", [
      {
        text: "취소",
      },
      {
        text: "확인",
        onPress: () => {
          const newMyPlan = { ...myPlan };
          delete newMyPlan[key];
          setMyPlan(newMyPlan);
        },
      },
    ]);
    return;
  };

  return (
    <View style={styles.Container}>
      <FlatGrid
        itemDimension={170}
        data={myPlan}
        spacing={20}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemContainer, { backgroundColor: item.code }]}
          >
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.plus}
        onPress={() => navigation.navigate("Browse")}
      >
        <Text>
          <Fontisto name="plus-a" size={30} color="grey" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
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
  itemCode: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
  plus: {
    backgroundColor: "lightgrey",
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    margin: 20,
    alignItems: "center",
  },
});

export default Plans;
