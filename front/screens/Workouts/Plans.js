import React, { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { FlatGrid } from "react-native-super-grid";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Plans = ({ navigation }) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    rerendering();
  }, [navigation]);

  const rerendering = () => navigation.addListener("focus", () => loadPlan());

  const addPlan = () => {

  }

  const loadPlan = () => {
    AsyncStorage.getItem("Plans").then((value) => {
      if (value !== null) {
        const result = JSON.parse(value);
        const newPlans = new Array();
        Object.keys(result).map((key) => {
          newPlans.push(result[key]);
        });
        setPlans(newPlans);
      }
    });
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.headerText}>{plans.length}개의 운동</Text>
      <FlatGrid
        itemDimension={170}
        data={plans}
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
      <TouchableOpacity
        style={styles.plus}
        // onPress={() => navigation.navigate("Browse")}
        onPress={() => addPlan()}
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
