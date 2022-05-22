import React, { useEffect, useState } from "react";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  addons,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Routine = ({ navigation }) => {
  const [checkUri, setcheckUri] = useState("");

  useEffect(() => {
    rerendering();
  }, [navigation]);

  const rerendering = () => navigation.addListener("focus", () => getData());

  const getData = () => {
    AsyncStorage.getItem("photoUri").then((value) => {
      if (value != null) {
        setcheckUri(value);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text>여기다 여기</Text>
      <Text>{checkUri}</Text>
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
