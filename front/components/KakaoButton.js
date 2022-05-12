import React from "react";
import { TouchableOpacity, Text } from "react-native";

const KakaoButton = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "green",
        padding: 10,
        margin: 10,
        borderRadius: 5,
        paddingHorizontal: 50,
        width: 330,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18, color: "black" }}>네이버계정 로그인</Text>
    </TouchableOpacity>
  );
};

export default KakaoButton;
