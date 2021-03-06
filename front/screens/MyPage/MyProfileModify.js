import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Table, Row, Rows } from "react-native-table-component-2";
import RNPickerSelect from "react-native-picker-select";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const url = "http://192.168.35.107:8282";
const LOGIN_STORAGE_KEY = "@loginInfo";

const MyProfileModify = ({ navigation, route }) => {
  const [userId, setuserId] = useState("");

  const loaduserId = async () => {
    const s = await AsyncStorage.getItem(LOGIN_STORAGE_KEY);
    s !== null ? setuserId(JSON.parse(s)) : null;
  };

  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userAddr, setuserAddr] = useState("");
  const [userHeight, setuserHeight] = useState("");
  const [userWeight, setuserWeight] = useState("");
  const [userTel, setuserTel] = useState();

  // const navListener = () =>
  //   navigation.addListener("focus", () => {
  //     onScreenLoad();
  //   });

  const onScreenLoad = async () => {
    console.log(route.params.userId);
    await fetch(url + "/showUserInfo.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: route.params.userId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setuserName(data.userName);
        setuserEmail(data.userEmail);
        setuserAddr(data.userAddr);
        setuserTel(data.userTel);
        setuserHeight(data.userHeight);
        setuserWeight(data.userWeight);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    // navListener();
    // loaduserId();
    onScreenLoad();
  }, []);

  const cancel = () => {
    navigation.pop();
  };

  const profileTest = () => {
    fetch(url + "/updateUserInfo.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: route.params.userId,
        userEmail,
        userName,
        userAddr,
        userTel,
        userHeight,
        userWeight,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data), navigation.pop());
    // .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.eachBox}>
        <Text style={styles.text}>?????????</Text>
        <TextInput
          style={styles.input}
          onChangeText={(userEmail) => setuserEmail(userEmail)}
          value={userEmail}
        />
      </View>

      <View style={styles.eachBox}>
        <Text style={styles.text}>??????</Text>
        <TextInput
          style={styles.input}
          onChangeText={(userName) => setuserName(userName)}
          value={userName}
        />
      </View>

      <View style={styles.eachBox}>
        <Text style={styles.text}>??????</Text>
        <TextInput
          style={styles.input}
          onChangeText={(userAddr) => setusetAddr(userAddr)}
          value={userAddr}
        />
      </View>

      <View style={styles.eachBox}>
        <Text style={styles.text}>????????????</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(userTel) => setuserTel(userTel)}
          value={userTel}
        />
      </View>

      <View style={styles.eachBox}>
        <Text style={styles.text}>???</Text>
        <TextInput
          style={styles.input}
          value={userHeight}
          keyboardType="numeric"
          onChangeText={(height) => setuserHeight(height)}
        />
      </View>

      <View style={styles.eachBox}>
        <Text style={styles.text}>?????????</Text>
        <TextInput
          style={styles.input}
          value={userWeight}
          keyboardType="numeric"
          onChangeText={(weight) => setuserWeight(weight)}
        />
      </View>
      <View style={styles.buttonCase}>
        <View style={styles.buttonPart}>
          <TouchableOpacity onPress={profileTest} style={styles.defaultButton}>
            <Text style={styles.userProfileText}>??????</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={cancel} style={styles.defaultButton}>
            <Text style={styles.userProfileText}>??????</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

function onPressBtn() {
  alert("????????????");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 130,
    alignItems: "center",
  },
  eachBox: {
    flex: 1,
    width: "80%",
  },
  profile: {
    flex: 8,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  head: {
    height: 40,
    backgroundColor: "#F5EEDC",
  },
  input: {
    height: 40,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    height: 40,
    marginLeft: 12,
    paddingTop: 13,
    marginBottom: 10,
    fontSize: 20,
  },
  buttonCase: {
    flex: 1,
    marginTop: 120,
    alignItems: "flex-end",
  },
  buttonPart: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  defaultButton: {
    backgroundColor: "#191919",
    height: windowWidth * 0.1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: windowWidth * 0.04,
    marginHorizontal: 5,
    width: windowWidth * 0.35,
  },
  userProfileText: {
    color: "#ececec",
  },
});

export default MyProfileModify;
