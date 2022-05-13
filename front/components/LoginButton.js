import React from "react";
import { TouchableOpacity, Text } from "react-native";

const LoginButton = () => {
  const fetchtest = async () => {
    try {
      await fetch("https://mywebsite.com/endpoint/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstParam: "yourValue",
          secondParam: "yourOtherValue",
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          return json.movies;
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
      onPress={fetchtest}
    >
      <Text style={{ fontSize: 18, color: "white" }}>로그인하기</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
