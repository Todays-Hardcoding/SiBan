import React, { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { FlatGrid } from "react-native-super-grid";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Plans = ({ navigation }) => {
  const [result, setResult] = useState({});
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    loadPlan;
    ObjToArry;
  }, []);

  const loadPlan = async () => {
    const data = await AsyncStorage.getItem("plan");
    setResult(JSON.parse(data));
  };

  const ObjToArry = () => {
    const newPlans = new Array();
    Object.keys(result).map((key) => {
      newPlans.push(result[key]);
    });
    setPlans(newPlans);
  };

  return (
    <View style={styles.Container}>
      <FlatGrid
        itemDimension={170}
        data={plans}
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
