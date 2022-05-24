import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState, Component } from "react";

import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const LOGIN_STORAGE_KEY = "@loginInfo";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const _url = "http://192.168.0.6:8282";

const QNADetail = ({ route }) => {
  const { result } = route.params;
  const [loginInfo, setLoginInfo] = useState("");
  const [postInfo, setPostInfo] = useState([]);

  const [reply, setReply] = useState();
  const [recievecReply, setRecievecReply] = useState([]);

  const loadLoginInfo = async () => {
    const s = await AsyncStorage.getItem(LOGIN_STORAGE_KEY);
    s !== null ? setLoginInfo(JSON.parse(s)) : null;
  };

  useEffect(() => {
    loadLoginInfo();
    selectDetail();
  }, []);

  const submit = () => {
    fetch(_url + "/insertReply.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        result,
        reply,
        loginInfo,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data != null) {
          setRecievecReply(data);
          selectDetail();
        }
      });
  };

  const selectDetail = () => {
    // 질문 상세보기 호출
    fetch(_url + "/selectDetail.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        result,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPostInfo(data);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/sibanlogo6.png")}
        style={styles.image}
      ></ImageBackground>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <View>
              <Text>조회수 {postInfo.postViews}</Text>
            </View>
            <View>
              <Text>{postInfo.postRegDate}</Text>
            </View>
          </View>
          <View style={styles.postTitle}>
            <Text>제목 {postInfo.postTitle}</Text>
          </View>
          <View
            style={[
              styles.postCategory,
              { flexDirection: "row" },
              { justifyContent: "space-between" },
            ]}
          >
            <Text>{postInfo.postCategory}</Text>
            <Text>작성자 : {postInfo.user}</Text>
          </View>
        </View>
        <View style={styles.postContainer}>
          <View style={styles.line}></View>
          <View style={styles.postBody}>
            <Text>{postInfo.postContent}</Text>
          </View>
        </View>
        <View style={styles.postAnswer}>
          {/* 1:1 Q&A 답변 */}
          <Text>답변 : {postInfo.replyContent}</Text>
        </View>
        <View style={styles.commentContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="답변"
            multiline={true}
            value={reply}
            onChangeText={(text) => setReply(text)}
          />
          <TouchableOpacity style={styles.commentButton} onPress={submit}>
            <Text style={styles.text}>제출</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  image: {
    width: windowWidth,
    height: windowHeight * 0.2,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
    resizeMode: "contain",
  },
  postContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  postHeader: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    marginTop: 10,
    height: 50,
    justifyContent: "space-between",
    width: windowWidth * 0.9,
    padding: 10,
    borderRadius: 8,
  },
  postTitle: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    marginTop: 10,
    height: 50,
    justifyContent: "space-between",
    width: windowWidth * 0.9,
    padding: 10,
    borderRadius: 8,
  },
  postCategory: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    marginTop: 10,
    height: 50,
    justifyContent: "flex-start",
    width: windowWidth * 0.9,
    padding: 10,
    borderRadius: 8,
  },
  line: {
    borderWidth: 0.5,
    width: windowWidth * 0.9,
    borderColor: "gray",
    marginTop: 10,
  },
  postBody: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    //backgroundColor: "#DDDDDD",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 8,
    marginTop: 10,
    padding: 15,
  },
  postAnswer: {
    width: windowWidth * 0.9,
    backgroundColor: "#DDDDDD",
    borderRadius: 8,
    marginTop: 10,
    padding: 15,
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  commentInput: {
    borderWidth: 1,
    width: windowWidth * 0.67,
    height: 40,
    padding: 10,
    borderRadius: 5,
    marginRight: 13,
    marginTop: 10,
  },
  commentButton: {
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.2,
    height: 40,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: "#34495e",
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});

export default QNADetail;
