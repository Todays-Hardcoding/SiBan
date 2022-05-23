import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const LoginHome = ({ navigation }) => {
  return (
    <>
      <View style={styles.mainContainer}>
        <Image
          source={require("../../assets/sibanlogo3.png")}
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
          <Text style={styles.inputText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputTouchableOpacity}
          onPress={() =>
            navigation.navigate("Register", {
              screen: "Register",
            })
          }
        >
          <Text style={styles.inputText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1.7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#191919",
  },
  mainButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#191919",
  },
  inputTouchableOpacity: {
    margin: 15,
    backgroundColor: "#ececec",
    width: 140,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  inputText: {
    fontSize: 20,
    padding: 20,
    color: "#191919",
    fontWeight: "800",
  },
  logoImage: {
    // width: "100%",
    overflow: "hidden",
  },
});

export default LoginHome;
