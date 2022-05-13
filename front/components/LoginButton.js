import React from "react";
import { TouchableOpacity, Text } from "react-native";

const LoginButton = () => {
  const test2 = () => {
    return fetch("/test.act")
      .then((res) => res.text())
      .then((m) => alert("나 이제 돌아갈래!!!"))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
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
      onPress={test2}
    >
      <Text style={{ fontSize: 18, color: "white" }}>로그인하기</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
