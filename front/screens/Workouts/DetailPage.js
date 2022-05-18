import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const DetailPage = ({ route, navigation }) => {
  const { exercise } = route.params;

  return (
    <View style={styles.Container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="bookmark" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{exercise.workoutName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export default DetailPage;
