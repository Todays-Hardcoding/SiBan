import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  Touchable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const _url = "http://192.168.45.96:8282";

const Search = () => {
  const [searchEmail, setSearchEmail] = useState("");
  const [searchPw, setSearchPw] = useState("");
  const [searchId, setSearchId] = useState("");
  const [searchTel, setSearchTel] = useState("");

  // 아이디 유무 관한 함수
  const postSearchEmail = () => {
    fetch(_url + "searchEmail.act", {
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
        if (data.searchId == "") {
          console.log(data.searchId);
          alert("존재하지 않는 이메일입니다.");
        } else {
          alert("회원님의 아이디는 " + data.searchId + "입니다.");
        }
      });
  };
  // 비번찾기
  const postSearchPw = () => {
    fetch(_url + "SearchPw.act", {
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
        if (data.searchPw == "") {
          console.log(data.searchPw);
          alert("전화번호와 아이디를 다시입력해주세요.");
        } else {
          alert("회원님의 비밀번호는 " + data.searchPw + "입니다.");
        }
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
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
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 24, fontWeight: "bold", margin: 10 }}>
            이메일을 이용해서 아이디 찾기
          </Text>

          <TextInput
            style={styles.input}
            value={searchEmail}
            onChangeText={(text) => setSearchEmail(text)}
            placeholder={"가입시 이메일을 입력해주세요."}
          />

          <TouchableOpacity onPress={postSearchEmail}>
            <Text style={styles.findIdText}>아이디 찾기</Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            아이디와 전화번호를 이용해서
          </Text>
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

          <TouchableOpacity onPress={postSearchPw}>
            <Text style={styles.findIdText}>비밀번호 찾기</Text>
          </TouchableOpacity>
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
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 150,
  },
  findIdText: {
    marginTop: 10,
    marginBottom: 50,
  },
});

export default Search;
