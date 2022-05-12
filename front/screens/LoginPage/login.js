import React from "react";

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import KakaoButton from "../../components/KakaoButton";
import LoginButton from "../../components/LoginButton";
import { NavigationContainer } from "@react-navigation/native";

const Login = ({ navigation }) => {
  //const onChangeId = (e) => { console.log(e.target.value); }

  console.log();
  return (
    <View
      style={{
        flex: 0.75,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>시반로그인</Text>
      <Text> </Text>

      <TextInput
        style={styles.input}
        placeholder={"아이디"}
        //onChange=((e) => onChangeId(e))
      />

      <TextInput
        style={styles.input}
        placeholder={"비밀번호"}
        secureTextEntry={true}
      />

      <TouchableOpacity style={{ flexDirection: "row" }}>
        <Text
          style={{ color: "gray" }}
          onPress={() =>
            navigation.navigate("LoginPage", {
              screen: "Search",
            })
          }
        >
          아이디/비번찾기{" "}
        </Text>
        <Text
          style={{ color: "gray" }}
          onPress={() =>
            navigation.navigate("LoginPage", {
              screen: "Register",
            })
          }
        >
          {" "}
          회원가입
        </Text>
      </TouchableOpacity>

      <LoginButton />
      <KakaoButton />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,

    fontSize: 20,
    borderRadius: 10,

    marginVertical: 10,
    width: "90%",
  },
});

export default Login;
