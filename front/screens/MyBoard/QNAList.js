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
import { useIsFocused } from "@react-navigation/native";

const _url = "http://192.168.242.2:8282";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const QNAList = ({ navigation }) => {
  const isFocused = useIsFocused();

  const [inquiry, setInquiry] = useState([]);
  const [postCode, setPostCode] = useState();
  useEffect(() => {

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
        
        setInquiry(data);
      });
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/sibanlogo6.png")}
        style={styles.image}
      ></ImageBackground>
      <ScrollView>
        <View>
          {inquiry.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                console.log(item.postCode);
                navigation.navigate("QNADetail" , {result: item.postCode})
              }}
              style={[
                styles.item,
                index === 0 && { borderTopWidth: 0 }, // CSS: first-child
                index % 2 === 1 && { backgroundColor: "#EAEAEA" }, // CSS: nth-child(even)
              ]}
            >
              <Text style={styles.contentText}>
                {item.postCategory} {item.postTitle}
              </Text>
              <Text style={[styles.contentText, { textAlign: "right" }]}>
                {item.postRegDate}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
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
          onPress={() => {
            navigation.navigate("QNANav", { Screen: "QNA" });
          }}
          style={styles.writeButton}
        >
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
    backgroundColor: "#34495e",
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
    fontWeight: "bold",
    color:"white"
  },
  searchButton: {
    backgroundColor: "#7f8c8d",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.15,
    marginLeft: 10,
  },
  contentContainer: {
    flexDirection: "row",
  },
  contentText: {
    fontWeight: "bold",
  },
  moonhiText: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 20,
    marginTop: 100,
    marginLeft: 50,
  },
});

export default QNAList;
