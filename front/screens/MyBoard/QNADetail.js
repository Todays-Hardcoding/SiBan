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

const QNADetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/qnaBackground.jpg")}
        style={styles.image}
      >
        <Text style={styles.text}>나의 1:1질문</Text>
      </ImageBackground>
      <ScrollView>
        <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View>
            <Text>조회수</Text>
          </View>
          <View>
            <Text>22-02-22</Text>
          </View>
        </View>
        <View style={styles.postTitle}>
          <Text>제목</Text>
        </View>
        <View style={styles.postCategory}>
          <Text>이용 문의</Text>
        </View>
        </View>
        {/* horizontal line*/}
        <View style={styles.postContainer}>
        <View style={styles.line}></View>
          <View style={styles.postBody}>
            <Text>이용문의 내용 TEST</Text>
          </View>
        </View>
        <View style={styles.commentContainer}>
          <TextInput style={styles.commentInput} placeholder="답변"></TextInput>
          <TouchableOpacity style={styles.commentButton}>
            <Text>제출</Text>
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
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
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
    backgroundColor: "#DAD0C2",
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
    backgroundColor: "#DAD0C2",
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
    backgroundColor: "#DAD0C2",
    marginTop: 10,
    height: 50,
    justifyContent: "flex-start",
    width: windowWidth *0.9,
    padding: 15,
    borderRadius: 8,
  },
  line: {
    borderWidth: 0.5,
    width: windowWidth *0.9,
    borderColor: "black",
    marginTop: 10,
  },
  postBody: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    backgroundColor: "#C0D8C0",
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
    backgroundColor: "#C0D8C0",
  },
});

export default QNADetail;
