import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, TextInput, ScrollView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Col } from "react-native-table-component-2";

const _url = "http://192.168.35.107:8282";
const LOGIN_STORAGE_KEY = "@loginInfo";

const windowWidth = Dimensions.get("window").width;

const QNA = ({ navigation }) => {
  const [open, setOpen] = useState(false);

  const [categoriValue, setCategoriValue] = useState(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);

  const [loginInfo, setLoginInfo] = useState("");

  const [items, setItems] = useState([
    { label: "이용 문의", value: "이용 문의" },
    { label: "이벤트 문의", value: "이벤트 문의" },
    { label: "오류 신고", value: "오류 신고" },
    { label: "기타 문의", value: "기타 문의" },
  ]);

  useEffect(() => {
    // 로그인 정보 
    loadLoginInfo();
  });

  const cancel = () => {
    navigation.pop();
  };

  const loadLoginInfo = async () => {
    const s = await AsyncStorage.getItem(LOGIN_STORAGE_KEY);
    s !== null ? setLoginInfo(JSON.parse(s)) : null;
  };

  const postBoard = () => {
    fetch(_url + "/insertInquiry.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoriValue,
        title,
        content,
        loginInfo
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data != null) {
          navigation.pop();
        }
      });
  };

  return (
    <View style={styles.container}>
      {/* dropdown */}
      <DropDownPicker
        style={styles.category}
        placeholder="상세 분류"
        open={open}
        value={categoriValue}
        items={items}
        setOpen={setOpen}
        setValue={setCategoriValue}
        setItems={setItems}
        containerStyle={{ alignItems: "center" }}
        dropDownContainerStyle={{ width: windowWidth * 0.9 }}
      />
      {/* textbox */}
      <View>
        <TextInput
          style={styles.input}
          placeholder="제목"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={styles.content}
          placeholder="내용을 입력해주세요."
          multiline={true}
          value={content}
          onChangeText={(text) => setContent(text)}
        />
      </View>

      {/* button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submit} onPress={cancel}>
          <Text style={styles.buttonText}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancel} onPress={postBoard}>
          <Text style={styles.buttonText}>제출</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    width: windowWidth * 0.9,
    padding: 10,
    borderRadius: 8,
    fontSize: 15,
  },
  category: {
    width: windowWidth * 0.9,
    alignItems: "center",
  },
  content: {
    height: 300,
    marginTop: 12,
    borderWidth: 1,
    width: windowWidth * 0.9,
    padding: 10,
    borderRadius: 8,
    textAlignVertical: "top",
    flexShrink: 1,
    fontSize: 15,
  },
  submit: {
    width: 120,
    height: 40,
    backgroundColor: "#7f8c8d",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    borderRadius: 8,
  },
  cancel: {
    width: 120,
    height: 40,
    backgroundColor: "#34495e",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 17,
    color: "white"
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default QNA;
