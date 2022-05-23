import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const _url = "http://112.172.225.17:8282";

const LOGIN_STORAGE_KEY = "@loginInfo";

const Login = ({ navigation }) => {
  //아이디 , 비밀번호
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  //유효성(빈칸)
  const [loginIdCheck, setLoginIdCheck] = useState(false);
  const [loginPwCheck, setLoginPwCheck] = useState(false);
  //오류메세지
  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("");
  //로그인된 아이디
  const [saveId, setSaveId] = useState("");
  const [loginInfo, setLoginInfo] = useState("");

  const data = new FormData();
  data.append("userId", "loginId");
  data.append("userPw", "loginPw");

  useEffect(() => {
    loadLoginInfo();
  }, []);

  const loadLoginInfo = async () => {
    const s = await AsyncStorage.getItem(LOGIN_STORAGE_KEY);
    s !== null ? setLoginInfo(JSON.parse(s)) : null;
  };
  const saveLoginInfo = async (toSave) => {
    await AsyncStorage.setItem(LOGIN_STORAGE_KEY, JSON.stringify(toSave));
  };

  const setId = (text) => {
    if (text.trim().length === 0) {
      setLoginIdCheck(false);
      setIdError("아이디를 다시 입력해주세요");
    } else {
      setLoginIdCheck(true);
    }
    setUserId(text);
  };
  const setPw = (text) => {
    if (text.trim().length === 0) {
      setLoginPwCheck(false);
      setPwError("비밀번호를 다시입력해주세요");
    } else {
      setLoginPwCheck(true);
    }
    setUserPw(text);
  };

  // 로그인
  const postLogin = () => {
    setLoginInfo("");
    fetch(_url + "/login.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        userPw,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.result)
        if (data.result == true) {
          setSaveId(userId);
          alert("로그인 성공");
          console.log(setSaveId);
          // 아이디정보 저장해야댐
          saveLoginInfo(userId);
          navigation.navigate("MainTabs");
        } else {
          alert("다시 로그인해주세요.");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          color: "#191919",
          marginBottom: 20,
        }}
      >
        시반로그인
      </Text>
      <Text> </Text>
      {/* 아이디 입력하는 곳 */}
      <TextInput
        style={styles.input}
        placeholder={"아이디를 입력해주세요"}
        value={userId}
        onChangeText={(text) => setId(text)}
      />

      {!loginIdCheck ? (
        <Text style={{ color: "red" }}>{idError}</Text>
      ) : (
        <Text></Text>
      )}

      <TextInput
        style={styles.input}
        placeholder={"비밀번호를 입력해주세요"}
        value={userPw}
        onChangeText={(text) => setPw(text)}
        secureTextEntry={true}
      />

      {!loginPwCheck ? (
        <Text style={{ paddingTop: 0, color: "red" }}>{pwError}</Text>
      ) : (
        <Text></Text>
      )}

      <TouchableOpacity style={{ flexDirection: "row" }}>
        <Text
          style={{ color: "gray", marginBottom: 20 }}
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
          backgroundColor: "#0c0c0c",
          padding: 10,
          margin: 10,
          borderRadius: 5,
          paddingHorizontal: 50,
          width: "80%",
          alignItems: "center",
        }}
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
    backgroundColor: "#ececec",
    padding: 10,
    fontSize: 15,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 5,
  },
});

export default Login;
