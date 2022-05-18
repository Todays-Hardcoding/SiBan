import React from "react";
import { Button, Text, TextInput, View } from "react-native";

const Search = () => {
  const [serchId, setSearchId] = useState("");
  const [serchPw, setSearchPw] = useState("");
    // 아이디 유무 관한 함수
    const checkId = () => {
      const _url = "http://192.168.35.133:8282/checkId.act";
  
      const idRegex = /^[A-Za-z]{1}[A-Za-z0-9_-]{3,19}$/;
      if (idRegex.test(id) === false) {
        alert("찾으실 아이디를 입력해주세요.");
      } else {
        fetch(_url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.checkId === true) {
              alert("가입시 질문을 골라주세요.");
            } else {
              alert("입력하신 아이디가 없습니다.");
              setDuplicatedID(true);
            }
          });
      }
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
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 10 }}>
        아이디 찾기. 비밀번호 재설정
      </Text>
      <Text style={{ fontSize: 18, color: "gray" }}>
        가입시 입력하신 아이디를 입력해주세요.
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
        placeholder={"가입시 아이디를 입력해주세요."}
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
