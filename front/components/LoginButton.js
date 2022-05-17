import React, { useEffect } from "react";
import { TouchableOpacity, Text } from "react-native";

import { sendData2 } from "../screens/Home";

const urlString = "http://192.168.35.107:8282";

const LoginButton = () => {
  const postTest = () => {
    fetch(urlString + "/test.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      // .then((data) => console.log(JSON.stringify(data)))
      .then((res) => console.log({ userId }));
    // .catch((error) => console.log(error));
  };

  return (
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

      onPress={postTest}
    >
      <Text style={{ fontSize: 18, color: "white" }}>로그인하기</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
