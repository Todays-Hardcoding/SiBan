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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const url = "http://192.168.0.6:8282";

const MyProfileModify = () => {
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userHeight, setuserHeight] = useState("");
  const [userWeight, setuserWeight] = useState("");
  const [userTel, setuserTel] = useState();
  const userId = "TATA";

  const onScreenLoad = () => {
    fetch(url + "/showUserInfo.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setuserName(data.userName);
        setuserEmail(data.userEmail);
        setuserTel(data.userTel);
        setuserHeight(data.userHeight);
        setuserWeight(data.userWeight);
      })
      // .then((data) => console.log(JSON.stringify(data)))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    onScreenLoad();
  }, []);

  const profileTest = (navigation) => {
    fetch(url + "/updateUserInfo.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        userEmail,
        userName,
        userTel,
        userHeight,
        userWeight,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      // .then(navigation.navigate("OthersNav", { screen: "MYPROFILE" }))
      // .then((data) => console.log(JSON.stringify(data)))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.eachBox}>
        <Text style={styles.text}>이메일</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(userEmail) => setuserEmail(userEmail)}
          value={userEmail}
        />
      </View>

      <View style={styles.eachBox}>
        <Text style={styles.text}>이름</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(userName) => setuserName(userName)}
          value={userName}
        />
      </View>

      <View style={styles.eachBox}>
        <Text style={styles.text}>전화번호</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(userTel) => setuserTel(userTel)}
          value={userTel}
        />
      </View>

      <View style={styles.eachBox}>
        <Text style={styles.text}>키</Text>
        <TextInput
          style={styles.input}
          value={userHeight}
          keyboardType="numeric"
          onChangeText={(height) => setuserHeight(height)}
        />
      </View>

      <View style={styles.eachBox}>
        <Text style={styles.text}>몸무게</Text>
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
            <Text style={styles.userProfileText}>저장</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressBtn} style={styles.defaultButton}>
            <Text style={styles.userProfileText}>뒤로</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

function onPressBtn() {
  alert("버튼이당");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  eachBox: {
    flex: 1,
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
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    height: 40,
    marginLeft: 12,
    paddingLeft: 10,
    paddingTop: 10,
  },
  buttonCase: {
    flex: 1,
    alignItems: "flex-end",
  },
  buttonPart: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
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
