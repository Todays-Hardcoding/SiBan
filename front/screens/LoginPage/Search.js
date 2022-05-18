import React from "react";
import { Button, Text, TextInput, View } from "react-native";

const Search = () => {
  const [searchEmail, setSearchEmail] = useState("");
  const [searchPw, setSearchPw] = useState("");
  const [searchId, setSearchId] = useState("");
  const [searchTel, setSearchTel] = useState("");
  // 아이디 유무 관한 함수
  const postSearchEmail = () => {
    const _url = "http://192.168.0.6:8282/searchEmail.act";

    fetch(_url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchEmail,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.searchId);
        alert("회원님의 아이디는 " + data.searchId + "입니다.");
      });
  };
  // 비번찾기
  const postSearchPw = () => {
    const _url = "http://192.168.0.6:8282/SearchPw.act";

    fetch(_url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchId,
        searchTel,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.searchPw);
        alert("회원님의 비밀번호는 " + data.searchPw + "입니다.");
      });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 90,
        width: "100%",
      }}
    >
      <KeyboardAwareScrollView
        extraScrollHeight={10}
        style={{
          // flex: 1,
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", margin: 10 }}>
            아이디 찾기
          </Text>

          <TextInput
            style={styles.input}
            value={searchEmail}
            onChangeText={(text) => setSearchEmail(text)}
            placeholder={"가입시 이메일을 입력해주세요."}
          />

          <Button
            style={{ color: "black" }}
            title="인증번호 받기"
            onPress={postSearchEmail}
          ></Button>

          <Text style={{ fontSize: 24, fontWeight: "bold", margin: 10 }}>
            비밀번호 찾기
          </Text>

          <TextInput
            style={styles.input}
            value={searchId}
            onChangeText={(text) => setSearchId(text)}
            placeholder={"가입시 아이디를 입력해주세요."}
          />
          <TextInput
            style={styles.input}
            value={searchTel}
            onChangeText={(text) => setSearchTel(text)}
            placeholder={"가입시 전화번호를 입력해주세요."}
          />

          <Button
            style={{ color: "black" }}
            title="인증번호 받기"
            onPress={postSearchPw}
          ></Button>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Search;
