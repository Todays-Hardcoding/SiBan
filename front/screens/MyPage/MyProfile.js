import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, images } from "../../constants";
import { Table, Row, Rows } from "react-native-table-component-2";
import AsyncStorage from "@react-native-async-storage/async-storage";

const url = "http://192.168.45.96:8282";

const MyProfile = ({ navigation }) => {
  const [userHeight, setuserHeight] = useState("");
  const [userWeight, setuserWeight] = useState("");
  const [routineCount, setRoutineCount] = useState(0);

  Font.loadAsync({ BMJUA: require("../../assets/fonts/BMJUA_ttf.tff") });

  const specialPromoData = [
    {
      id: 1,
      img: images.myroutine,
      title: "내 루틴",
      description: "설정한 내 루틴을 확인해 보세요!",
      code: "Routine",
    },
    {
      id: 2,
      img: images.calendar,
      title: "일정 관리",
      description: "이번달 일정을 확인해 보세요!",
      code: "OthersNav",
    },
    {
      id: 3,
      img: images.record,
      title: "기록",
      description: "달성 트로피를 확인해 보세요!",
      code: "ActivityNav",
    },
    {
      id: 4,
      img: images.diet,
      title: "식단관리",
      description: "나에게 맞는 식단을 찾아보세요!",
      code: "MealPlanNav",
    },
  ];

  const [specialPromos, setSpecialPromos] = React.useState(specialPromoData);
  const [shouldShow, setShouldShow] = useState(true);
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginVertical: SIZES.padding * 2,
        }}
      >
        <View style={{ flex: 1, alignItems: "center", left: 30 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#3f3f3f" }}>
            마이페이지
          </Text>
        </View>
        <View style={styles.userSupervise}>
          <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
            <Text>회원 관리</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const [checkUri, setcheckUri] = useState("");

  const getData = () => {
    AsyncStorage.getItem("photoUri").then((value) => {
      if (value != null) {
        setcheckUri(value);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);
  function renderBanner() {
    return (
      <View
        style={{
          height: 180,
          borderRadius: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("OthersNav", { screen: "MYPROFILE" });
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={{ uri: checkUri }}
              resizeMode="cover"
              style={{
                width: "60%",
                height: "100%",
                borderRadius: 20,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function renderPromos() {
    const HeaderComponent = () => (
      <View>
        {renderHeader()}
        {renderBanner()}
        {renderPromoHeader()}
      </View>
    );

    const renderPromoHeader = () => (
      <View
        style={{
          flexDirection: "row",
          marginBottom: -50,
        }}
      >
        <SafeAreaView style={styles.buttonArea}>
          {shouldShow ? (
            <FlatList
              renderItem={renderItem}
              contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              data={specialPromos}
              keyExtractor={(item) => `${item.id}`}
              showsVerticalScrollIndicator={false}
            ></FlatList>
          ) : (
            MyProfileModify()
          )}
        </SafeAreaView>
      </View>
    );

    const renderItem = ({ item }) => (
      // 버튼 관련
      <TouchableOpacity
        style={{
          marginVertical: SIZES.base,
          width: SIZES.width / 2.5,
        }}
        onPress={() => {
          navigation.navigate(item.code, {
            params: { routineCount: routineCount },
          });
        }}
      >
        <View
          style={{
            height: 60,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Image
            source={item.img}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        </View>

        <View
          style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.lightGray,
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          {/* <Text>{item.title}</Text> */}
          <Text>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );

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
          });
      };
      useEffect(() => {
        onScreenLoad();
      }, []);

      var state = {
        tableHead: ["회원이름"],
        tableData: [
          ["이름", userName],
          ["전화번호", userTel],
          ["이메일", userEmail],
          ["키", userHeight],
          ["몸무게", userWeight],
        ],
      };

      return (
        <View>
          <View style={styles.modifyButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("OthersNav", { screen: "MyProfileModify" });
                setShouldShow(!shouldShow);
              }}
              style={styles.userProfileText}
            >
              <Text>정보수정</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profile}>
            <Table borderStyle={{ borderWidth: 2, borderColor: "black" }}>
              <Row
                data={state.tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              <Rows data={state.tableData} textStyle={styles.text} />
            </Table>
          </View>
        </View>
      );
    };
    //
    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={<View style={{ marginBottom: 80 }}></View>}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e9e9e9" }}>
      {renderPromos()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flex: 8,
    backgroundColor: "#fff",
    borderRadius: 2,
  },
  head: {
    height: 40,
    backgroundColor: "#ececec",
  },
  text: {
    margin: 6,
    textAlign: "center",
  },
  userProfile: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  //정보 수정 버튼
  userProfileText: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#949494",
    height: 30,
    width: "30%",
    marginBottom: 10,
    borderRadius: 20,
  },
  modifyButton: {
    alignItems: "flex-end",
  },
  userSupervise: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#949494",
    borderRadius: 20,
    width: 70,
  },
  buttonArea: {
    flex: 1,
    backgroundColor: "#e9e9e9",
    margin: 20,
  },
});

export default MyProfile;
