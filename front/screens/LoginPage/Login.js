import React, { useState } from "react";

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import NaverButton from "../../components/NaverButton";
import { NavigationContainer } from "@react-navigation/native";
//import { State } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");

  const [loginIdCheck, setLoginIdCheck] = useState(false);
  const [loginPwCheck, setLoginPwCheck] = useState(false);

  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("");

  const [saveId, setSaveId] = useState("");

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

  // 로그인
  const postLogin = () => {
    const _url = "http://192.168.35.133:8282/login.act";

    fetch(_url, {
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
      .then((data) => {
        //console.log(data.result)
        if (data.result == true) {
          setSaveId(loginId);
          alert("로그인 성공");
          console.log(setSaveId);
          navigation.navigate("MainTabs");
        } else {
          alert("다시 로그인해주세요.");
        }
      });
  };

  return (
    <View
      style={{
        flex: 1,
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
          width: "80%",
          alignItems: "center",
        }}
        // onPress={test2}

        onPress={postLogin}
      >
        <Text style={{ fontSize: 18, color: "white" }}>로그인하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 5,
    width: "80%",
  },
});

export default Login;
