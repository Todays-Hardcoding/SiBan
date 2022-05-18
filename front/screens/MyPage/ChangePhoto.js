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

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
console.log(windowWidth);

function onPressBtn() {
  alert("버튼이당");
}

const basePhoto =
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687";

const ChangePhoto = ({ navigation, onPress }) => {
  // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState(basePhoto);

  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: pickedImagePath }} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttons}
          onPress={showImagePicker}
          title="Select an image"
        />
        <Button
          style={styles.buttons}
          onPress={openCamera}
          title="Open camera"
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
    backgroundColor: "#6072e2",
  },
  buttonContainer: {
    width: 400,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttons: {
    color: "black",
  },
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
