import React, { useState } from "react";

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
//import TextInput from 'react-native-input-validator';
//import KakaoButton from '../../components/KakaoButton';
//import LoginButton from '../../components/LoginButton';
import KakaoButton from "../components/KakaoButton";
import LoginButton from "../components/LoginButton";
import { NavigationContainer } from "@react-navigation/native";
//import { State } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {
  const [loginId, setLoginId] = useState("");
  // const [loginPw, setLoginPw] = useState("");

  const [loginIdCheck, setLoginIdCheck] = useState(false);
  //const [loginPwCheck, setLoginPwCheck] = useState(false);

  const [loginError, setLoginError] = useState("");

  console.log(loginId);

  const onChangeId = (text) => {
    if (text.trim().length === 0) {
      setLoginIdCheck(false);
    } else {
      setLoginIdCheck(true);
    }
    setLoginId(text);
    console.log(loginIdCheck);
    console.log(loginId);
  };

  return (
    <View
      style={{
        flex: 0.75,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>시반로그인</Text>
      <Text> </Text>

      {/* 아이디 입력하는 곳 */}
      <TextInput
        style={styles.input}
        placeholder={"아이디"}
        //label='Email'
        value={loginId}
        //onChangeText={(email) => setEmail(email)}
        //error={hasEmailErrors}
        onChangeText={(text) => onChangeId(text)}
      />
      <View>
        {loginIdCheck == false ? (
          <Text style={{ color: "red" }}>아이디를 입력해주세요</Text>
        ) : null}
      </View>

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
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
    paddingVertical: 10,

    marginVertical: 10,
    paddingHorizontal: 32,
    marginBottom: 16,
    width: "85%",
  },
});

export default Login;
