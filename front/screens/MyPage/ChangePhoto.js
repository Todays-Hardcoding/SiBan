import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  Pressable,
  ImageBackground,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dimensions } from "react-native";

const url = "http://192.168.35.107:8282";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// 이미지 선택
const ChangePhoto = ({ navigation }) => {
  const [userProfile, setuserProfile] = useState("https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687");
  const userId = "TATA";

  const getData = () => {
    AsyncStorage.getItem("photoUri").then((value) => {
      if (value != null) {
        setuserProfile(value);
      }
    });
  };
  getData();

  const showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    var result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setuserProfile(result.uri);
      profileTest(result.uri);
      await AsyncStorage.setItem("photoUri", result.uri);
      console.log("userProfile" + userProfile);
      console.log("result.uri" + result.uri);
      navigation.push("MYPAGE");
    }
  };
  // 카메라 촬영
  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  const profileTest = async () => {
    fetch(url + "/updateUserImage.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        userProfile,
      }),
    })
      .then((response) => response.json())

      .catch((error) => console.log(error));
  };

  //
  // navigation.navigate("DetailPage", {
  //   result: item,
  // }

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: userProfile }} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttons}
          color="#5b5b5b"
          onPress={showImagePicker}
          title="이미지 선택"
        />
        <Button
          style={styles.buttons}
          color="#5b5b5b"
          onPress={openCamera}
          title="카메라 촬영"
        />
      </View>
    </View>
  );
};
export default ChangePhoto;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#191919",
  },
  buttonContainer: {
    width: 400,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttons: {},
  imageContainer: {
    padding: 30,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
    resizeMode: "cover",
  },
});
