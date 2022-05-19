import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Dimensions } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Routine = () => {
  // const [checkUri, setcheckUri] = useState("");

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = () => {
  //   AsyncStorage.getItem("photoUri").then((value) => {
  //     if (value != null) {
  //       setcheckUri(value);
  //     }
  //   });
  // };

  return (
    <View style={styles.container}>
      <Text>여기다 여기</Text>
      {/* <Text>{checkUri}</Text> */}
    </View>
  );
};
export default Routine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECB390",
  },
});
