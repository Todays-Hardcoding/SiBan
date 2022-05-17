import React from "react";
import {
  Image, StyleSheet, Text, TouchableOpacity, View
} from "react-native";

const LoginHome = ({ navigation }) => {
  //const onChangeId = (e) => { console.log(e.target.value); }

  console.log();
  return (
    <>
      <View style={styles.mainContainer}>
        <Image
          source={require("../../assets/sibanlogo.png")}
          style={styles.logoImage}
          resizeMode="stretch"
        />
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
    backgroundColor: "#6072e2",
  },
  mainButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6072e2",
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
  logoImage: {
    // width: "100%",
    overflow: "hidden",
  },
});

export default LoginHome;
