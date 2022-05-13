import React from "react";
import { TouchableOpacity, Text } from "react-native";

const LoginButton = () => {
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
    >
      <Text style={{ fontSize: 18, color: "white" }}>로그인하기</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
