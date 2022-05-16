import React from "react";
import {
  StyleSheet, Text, TextInput, TouchableOpacity, View
} from "react-native";
import LoginButton from "../../components/LoginButton";
import NaverButton from "../../components/NaverButton";



const Login = ({ navigation }) => {
  //const onChangeId = (e) => { console.log(e.target.value); }

  console.log();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
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
          style={styles.findBtn}
          onPress={() =>
            navigation.navigate("LoginPage", {
              screen: "Search",
            })
          }
        >
          아이디/비번찾기{" "}
        </Text>
        <Text
          style={styles.findBtn}
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

      <LoginButton style={styles.loginBtn} />
      <NaverButton style={styles.loginBtn} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
  },
  findBtn: {
    color: "gray",
    margin: 20,
  },
  loginBtn: {
    margin: 30,
  },
});

export default Login;
