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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const _url = "http://192.168.56.1:8282";

const QNADetail = ({route}) => {
  const {result} = route.params;
  const [postCategory,setPostCategory] = useState(); 
  const [postCode,setPostCode] = useState(); 
  const [postContent,setPostContent] = useState(); 
  const [postRegDate,setPostRegDate] = useState(); 
  const [postTitle,setPostTitle] = useState(); 
  const [postViews,setPostViews] = useState(); 

  console.log(result);
  useEffect(() => {

    console.log(result);
    fetch(_url + "/selectDetail.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        result
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPostCategory(data.postCategory);
        setPostCode(data.postCode);
        setPostContent(data.postContent);
        setPostRegDate(data.postRegDate);
        setPostTitle(data.postTitle);
        setPostViews(data.postViews);
      });
    }, []);
  return (
    <SafeAreaView style={styles.container} >
      <ImageBackground
        source={require("../../assets/sibanlogo6.png")}
        style={styles.image}
      >
      </ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View>
            <Text>조회수 {postViews}</Text>
          </View>
          <View>
            <Text>{postRegDate}</Text>
          </View>
        </View>
        <View style={styles.postTitle}>
          <Text>제목 {postTitle}</Text>
        </View>
        <View style={styles.postCategory}>
          <Text>이용문의 {postCategory}</Text>
        </View>
        </View>
        {/* horizontal line*/}
        <View style={styles.postContainer}>
        <View style={styles.line}></View>
          <View style={styles.postBody}>
            <Text>{postContent}</Text>
          </View>
        </View>
        <View style={styles.postAnswer}>
          {/* 1:1 Q&A 답변 */}
          <Text>QNA 답변란</Text>
        </View>
        <View style={styles.commentContainer}>
          <TextInput style={styles.commentInput} placeholder="답변"></TextInput>
          <TouchableOpacity style={styles.commentButton}>
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
    resizeMode: 'contain',
    
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
    width: windowWidth *0.9,
    padding: 10,
    borderRadius: 8,
  },
  postTitle : {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor:"#DDDDDD",
    marginTop: 10,
    height: 50,
    justifyContent: "space-between",
    width: windowWidth *0.9,
    padding: 10,
    borderRadius: 8,
  },
  postCategory: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor:"#DDDDDD",
    marginTop: 10,
    height: 50,
    justifyContent: "flex-start",
    width: windowWidth *0.9,
    padding: 10,
    borderRadius: 8,
  },
  line: {
    borderWidth: 0.5,
    width: windowWidth *0.9,
    borderColor: "gray",
    marginTop: 10,
  },
  postBody: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    //backgroundColor: "#DDDDDD",
    borderWidth: 1,
    borderColor:"#DDDDDD",
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
    color: "white"
  },
});

export default QNADetail;
