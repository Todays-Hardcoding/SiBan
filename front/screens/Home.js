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
import NaverButton from "../components/NaverButton";
import LoginButton from "../components/LoginButton";
import { NavigationContainer } from "@react-navigation/native";
//import { State } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");

  const [loginIdCheck, setLoginIdCheck] = useState(false);
  const [loginPwCheck, setLoginPwCheck] = useState(false);

  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("");

  const sendData = [{ loginId }, { loginPw }];

  const data = new FormData();
  data.append("userId", "loginId");
  data.append("userPw", "loginPw");

  const setId = (text) => {
    if (text.trim().length === 0) {
      setLoginIdCheck(false);
      setIdError("아이디를 다시 입력해주세요");
    } else {
      setLoginIdCheck(true);
    }
    setLoginId(text);
    // console.log(loginIdCheck);
    // console.log(loginId);
  };
  const setPw = (text) => {
    if (text.trim().length === 0) {
      setLoginPwCheck(false);
      setPwError("비밀번호를 다시입력해주세요");
    } else {
      setLoginPwCheck(true);
    }
    setLoginPw(text);
    // console.log(loginPwCheck);
    // console.log(loginPw);
  };

  const postTest = () => {

    const url = "http://192.168.35.133:8282/test2.json";

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginId,
        loginPw,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    // .then((data) => console.log(JSON.stringify(data)))
    // .catch((error) => console.log(error));
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
        placeholder={"아이디를 입력해주세요"}
        value={loginId}
        onChangeText={(text) => setId(text)}
      />

      {!loginIdCheck && <Text style={{ color: "red" }}>{idError}</Text>}

      <TextInput
        style={styles.input}
        placeholder={"비밀번호를 입력해주세요"}
        onChangeText={(text) => setPw(text)}
        secureTextEntry={true}
      />

      {!loginPwCheck && (
        <Text style={{ paddingTop: 0, color: "red" }}>{pwError}</Text>
      )}

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
      {/* <LoginButton /> */}

      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 10,
          margin: 10,
          borderRadius: 5,
          paddingHorizontal: 50,
          width: 330,
          alignItems: "center",
        }}
        // onPress={test2}

        onPress={postTest}
      >
        <Text style={{ fontSize: 18, color: "white" }}>로그인하기</Text>
      </TouchableOpacity>

      <NaverButton />
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

    marginVertical: 5,
    paddingHorizontal: 32,
    marginBottom: 16,
    width: "85%",
  },
});

export default Login;
