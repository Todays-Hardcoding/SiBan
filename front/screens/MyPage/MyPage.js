import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function onPressBtn() {
  alert("버튼이당");
}

const MyPageMain = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerPage}>
        <View style={styles.topPage}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("BtnPage", { screen: "CHANGEPHOTO" });
            }}
            style={styles.image}
          >
            <Image
              source={require("../../assets/profile.png")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.userName}>김이나</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("BtnPage", { screen: "MYPROFILE" });
            }}
            style={styles.userProfile}
          >
            <Text style={styles.userProfileText}>키: 170cm</Text>
            <Text style={styles.userProfileText}>몸무게: 50kg</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomPage}>
          <TouchableOpacity onPress={onPressBtn} style={styles.myPageBtn}>
            <Text style={styles.btnText}>내루틴</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("BtnPage", { screen: "RECORD" });
            }}
            style={styles.myPageBtn}
          >
            <Text style={styles.btnText}>일정관리</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ActivityNav");
            }}
            style={styles.myPageBtn}
          >
            <Text style={styles.btnText}>활동</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MealPlanNav");
            }}
            style={styles.myPageBtn}
          >
            <Text style={styles.btnText}>식단관리</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default MyPageMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECB390",
  },
  innerPage: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: windowHeight * 0.06,
    marginHorizontal: windowWidth * 0.05,
    borderRadius: 15,
    alignItems: "center",
  },
  topPage: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: windowHeight * 0.04,
  },
  bottomPage: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  title: {
    flex: 0.3,
    fontSize: windowWidth * 0.08,
    fontWeight: "600",
    textAlign: "center",
  },
  myPageBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C0D8C0",
    width: windowWidth * 0.4,
    height: windowHeight * 0.16,
    marginBottom: 20,
    borderRadius: 10,
  },
  btnText: {
    fontSize: windowWidth * 0.05,
  },
  image: {
    flex: 1,
    borderRadius: (windowWidth * 0.4) / 2,
    width: windowWidth * 0.4,
    height: windowHeight * 0.4,
  },
  userName: {
    flex: 0.2,
    fontSize: windowWidth * 0.05,
    textAlign: "center",
    marginTop: 10,
  },
  userProfile: {
    flex: 0.4,
    backgroundColor: "#F5EEDC",
    height: windowWidth * 0.2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: windowWidth * 0.1,
  },
  userProfileText: {
    marginHorizontal: 30,
  },
});
