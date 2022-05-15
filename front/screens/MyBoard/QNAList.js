import React, { useEffect, useState, Component } from "react";

import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Button,
  TextInput,
  ImageBackground,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// 내질문, 날짜
const data = [
  {
    name: "내 1:1 질문 5",
    date: "22-02-05",
    // date 예시
  },
  {
    name: "내 1:1 질문 4",
    date: "22-02-04",
  },
  {
    name: "내 1:1 질문 3",
    date: "22-02-03",
  },
  {
    name: "내 1:1 질문 2",
    date: "22-02-02",
  },
  {
    name: "내 1:1 질문 1",
    date: "22-02-01",
  },
];

const QNAList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/qnaBackground.jpg")}
        style={styles.image}
      >
        <Text style={styles.text}>나의 1:1질문 목록</Text>
      </ImageBackground>
      <ScrollView style={styles.itemContainer}>
        <View>
          {data.map((item, index) => (
            <View
              style={[
                styles.item,
                index === 0 && { borderTopWidth: 0 }, // CSS: first-child
                index % 2 === 1 && { backgroundColor: "#EAEAEA" }, // CSS: nth-child(even)
              ]}
            >
              <Text>{item.name}</Text>
              <Text>{item.date}</Text>
            </View>
          ))}
        </View>

        <View>
          <TouchableOpacity style={styles.contactButton}>
            <Text>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="검색어를 입력해주세요"
        ></TextInput>
        <TouchableOpacity style={styles.searchButton}>
          <Text>검색</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    //flex: 1,
  },
  image: {
    width: windowWidth,
    height: windowHeight * 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "#000",
  },
  contactButton: {
    width: windowWidth * 0.9,
    height: 40,
    backgroundColor: "#AACFCF",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    borderRadius: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
    marginTop: 30,
  },
  searchInput: {
    borderWidth: 1,
    width: windowWidth * 0.7,
    height: 40,
    padding: 10,
    borderRadius: 5,
    marginRight: 13,
    marginLeft: 8,
  },
  searchButton: {
    backgroundColor: "#C0D8C0",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.15,
    marginLeft: 10,
  },
});

export default QNAList;
