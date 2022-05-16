import React from "react";
import { Button, Text, TextInput, View } from "react-native";

const Search = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 10 }}>
        아이디 찾기. 비밀번호 재설정
      </Text>
      <Text style={{ fontSize: 18, color: "gray" }}>
        가입시 입력하신 이메일을 입력해주세요.
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          fontSize: 18,
          borderRadius: 10,
          marginVertical: 10,
          width: "70%",
          paddingTop: 20,
          paddingBottom: 20,
          alignItems: "center",
        }}
        placeholder={"이메일을 입력해주세요."}
      />

      <Button
        style={{ color: "black" }}
        title="인증번호 받기"
        onPress={() => alert("이메일이 전송되었습니다.")}
      ></Button>
    </View>
  );
};

export default Search;
