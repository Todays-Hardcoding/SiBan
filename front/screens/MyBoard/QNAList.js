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

// 내질문, 날짜 예시
const data = [
  {
    name: "내 1:1 질문 10",
    date: "22-02-05",
  },
  {
    name: "내 1:1 질문 9",
    date: "22-02-05",
  },
  {
    name: "내 1:1 질문 8",
    date: "22-02-05",
  },
  {
    name: "내 1:1 질문 7",
    date: "22-02-05",
  },
  {
    name: "내 1:1 질문 6",
    date: "22-02-05",
  },
  {
    name: "내 1:1 질문 5",
    date: "22-02-05",
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

const [inquiry, setInquiry] = useState([]);
const QNAList = ({navigation}) => {
  const _url = "http://192.168.242.2:8282/selectInquiry.act"
  fetch(_url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setInquiry(data);
    });
    // navigation.navigate("QNADetailNav", {Screen: "QNADetail"})

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/sibanLogo.png")}
        style={styles.image}
      >
      </ImageBackground>
      <ScrollView>
      <FlatGrid
        itemDimension={170}
        data={exercises}
        spacing={20}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemContainer, { backgroundColor: "lightgrey" }]}
            onPress={() =>
              navigation.navigate("QNADetailNav", {
                screen: "QNADetail",
                params: { exercise: item },
              })
            }
          >
            <View style={styles.itmeimageContainer}></View>
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemName}>{item.workoutName}</Text>
              <Text style={styles.itemSummary}>
                {item.workoutCourse} - {item.workoutGoal}
              </Text>
              {/* <Text style={styles.itemCode}>{item.workoutDescription}</Text> */}
            </View>
          </TouchableOpacity>
        )}
      />
      </ScrollView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="검색어를 입력해주세요"
        ></TextInput>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.buttonText}>검색</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          //key={index} 했다 ~!~!~!~!!~~~~
          onPress={()=> {
          navigation.navigate("QNANav", {Screen: "QNA"})
          }}
          style={styles.writeButton}>
          <Text style={styles.buttonText}>글작성</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: windowWidth,
    height: windowHeight * 0.2,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
  },
  writeButton: {
    backgroundColor: "#F2C9E1",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.15,
    marginLeft: 10,
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
    marginTop: 30,
  },
  searchInput: {
    borderWidth: 1,
    width: windowWidth * 0.55,
    height: 40,
    padding: 10,
    borderRadius: 5,
    marginRight: 13,
    marginLeft: 8,
  },
  buttonText: {
    fontWeight: "bold"
  },
  searchButton: {
    backgroundColor: "#B1BCE6",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.15,
    marginLeft: 10,
  },
});

export default QNAList;