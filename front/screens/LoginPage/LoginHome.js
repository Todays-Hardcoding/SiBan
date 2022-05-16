import React from "react";

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import NaverButton from "../../components/NaverButton";
import LoginButton from "../../components/LoginButton";
import { NavigationContainer } from "@react-navigation/native";


const LoginHome = ({ navigation }) => {
  //const onChangeId = (e) => { console.log(e.target.value); }

  console.log();
  return (
    <>
      <View style={styles.mainContainer}>
        <Text>LoginHome 화면</Text>
      </View>
      <View style={styles.mainButtonContainer}>
        <TouchableOpacity
          style={styles.inputTouchableOpacity}
          onPress={() =>
            navigation.navigate("Login", {
              screen: "Login",
            })
          }
        >
          <Text style={styles.inputText}>L o g i n</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputTouchableOpacity}
          onPress={() =>
            navigation.navigate("Register", {
              screen: "Register",
            })
          }
        >
          <Text style={styles.inputText}>J o i n</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cab8ff",
  },
  mainButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cab8ff",
  },
  inputTouchableOpacity: {
    margin: 30,
    backgroundColor: "#B5DEFF",
    width: 180,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  inputText: {
    fontSize: 30,
    padding: 20,
    color: "white",
    fontWeight: "800",
  },
});

export default LoginHome;
