import React from "react";
import { TouchableOpacity, Text } from "react-native";

const LoginButton = () => {
  const postTest = () => {
    const url = "http://192.168.35.133:8282/test2.json";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log("성공!"))
      .then((response) => response.json())
      .then((json) => {
        return json.test2;
      })
      .catch((error) => console.log(error));
  };

  // const test2 = () => {
  //   return (
  //     fetch("http://192.168.45.96:8282/test.act", {
  //       mode: "no-cors",
  //     })
  // .then((response) => {
  //   if (!response.ok) {
  //     throw new Error("Network response was not OK");
  //   }
  //   //인터페이스 의 blob()메서드는 스트림을 가져와 완료할 때까지 읽습니다.
  //   return response.blob();
  // })

  //       .then((myBlob) => {
  //         console.log("됐다고 해!");
  //       })
  //       .catch((error) => {
  //         console.error(
  //           "There has been a problem with your fetch operation:",
  //           error
  //         );
  //       })
  //   );
  // };

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
      // onPress={test2}
      onPress={postTest}
    >
      <Text style={{ fontSize: 18, color: "white" }}>로그인하기</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
