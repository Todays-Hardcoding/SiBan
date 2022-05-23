import React, { useState, useEffect, useCallback } from "react";
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

const url = "http://192.168.0.6:8282";
const LOGIN_STORAGE_KEY = "@loginInfo";

const MyProfile = ({ navigation }) => {
  const [userHeight, setuserHeight] = useState("");
  const [userWeight, setuserWeight] = useState("");
  const [routineCount, setRoutineCount] = useState(0);

  const [userId, setUserId] = useState("");

  // 화면 리렌더링
  useEffect(() => {
    navListener();
    // 로그인 정보
    loaduserId();
  }, [navigation]);

  const loaduserId = async () => {
    const s = await AsyncStorage.getItem(LOGIN_STORAGE_KEY);
    s !== null ? setUserId(JSON.parse(s)) : null;
    console.log(s);
  };

  const deleteLoginInfo = async () => {
    await AsyncStorage.removeItem(LOGIN_STORAGE_KEY);
    console.log(AsyncStorage.getItem(LOGIN_STORAGE_KEY));
  };

  const [checkUri, setcheckUri] = useState("");

  const getData = () => {
    AsyncStorage.getItem("photoUri").then((value) => {
      if (value != null) {
        setcheckUri(value);
      }
    });
  };

  //이것은 혁명이다!
  const navListener = () =>
    navigation.addListener("focus", () => {
      getData();
    });

  const specialPromoData = [
    {
      id: 1,
      img: images.myroutine,
      title: "내 루틴",
      description: "설정한 내 루틴을 확인해 보세요!",
      code: "Workout",
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
          <Text style={{ color: "black" }}>{userId}님 환영합니다</Text>
        </View>
        <View style={styles.upperButton}>
          <TouchableOpacity
            style={styles.userSupervise}
            onPress={() => setShouldShow(!shouldShow)}
          >
            <Text>회원 관리</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.upperButton}>
          <TouchableOpacity
            style={styles.userSupervise}
            onPress={() => {
              deleteLoginInfo(userId);
              navigation.navigate("LoginPage");
            }}
          >
            <Text>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderBanner() {
    return (
      <View
        style={{
          height: 330,
          borderRadius: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("OthersNav", { screen: "ChangePhoto" });
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={{ uri: checkUri }}
              resizeMode="cover"
              style={{
                width: "80%",
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
          marginBottom: -40,
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
      const [userAddr, setuserAddr] = useState("");
      const [userHeight, setuserHeight] = useState("");
      const [userWeight, setuserWeight] = useState("");
      const [userTel, setuserTel] = useState();

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
            setuserAddr(data.userAddr);
            setuserTel(data.userTel);
            setuserHeight(data.userHeight);
            setuserWeight(data.userWeight);
          });
      };
      useEffect(() => {
        onScreenLoad();
      }, []);

      // var state = {
      //   tableHead: ["회원이름"],
      //   tableData: [
      //     ["이름", userName],
      //     ["전화번호", userTel],
      //     ["이메일", userEmail],
      //     ["키", userHeight],
      //     ["몸무게", userWeight],
      //   ],
      // };

      const removeValue = async () => {
        try {
          await AsyncStorage.removeItem(LOGIN_STORAGE_KEY);
          onScreenLoad();
          console.log();
          console.log(userId);
          return true;
        } catch (e) {
          console.log(e);
        }
      };

      return (
        <View>
          <View style={styles.modifyButton}>
            <TouchableOpacity
              onPress={() => {
                loaduserId();
                navigation.navigate("OthersNav", {
                  screen: "MyProfileModify",
                  params: { userId: userId },
                });
                setShouldShow(!shouldShow);
              }}
              style={styles.userProfileText}
            >
              <Text>정보수정</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={styles.userProfileText}
              onPress={() => {
                removeValue();
                navigation.navigate("MYPAGE");
              }}
            >
              <Text>로그아웃</Text>
            </TouchableOpacity> */}
          </View>
          <View style={styles.profile}>
            <View style={styles.userProfileBox}>
              <Text style={styles.profileText}>이름</Text>
              <Text style={styles.profileText}>{userName}</Text>
            </View>
            <View style={styles.userProfileBox}>
              <Text style={styles.profileText}>전화번호</Text>
              <Text style={styles.profileText}>{userTel}</Text>
            </View>
            <View style={styles.userProfileBox}>
              <Text style={styles.profileText}>이메일</Text>
              <Text style={styles.profileText}>{userEmail}</Text>
            </View>
            <View style={styles.userProfileBox}>
              <Text style={styles.profileText}>주소</Text>
              <Text style={styles.profileText}>{userAddr}</Text>
            </View>
            <View style={styles.userProfileBox}>
              <Text style={styles.profileText}>키</Text>
              <Text style={styles.profileText}>{userHeight}</Text>
            </View>
            <View style={styles.userProfileBox}>
              <Text style={styles.profileText}>몸무게</Text>
              <Text style={styles.profileText}>{userWeight}</Text>
            </View>
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
    borderRadius: 2,
    marginBottom: -40,
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
  userProfileBox: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    justifyContent: "space-between",
    borderColor: "#2c2c2c",
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 15,
  },
  profileText: {
    fontSize: 20,
    alignItems: "flex-end",
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
    marginHorizontal: 10,
  },
  modifyButton: {
    justifyContent: "center",
    flexDirection: "row",
  },
  upperButton: {
    flexDirection: "row",
    marginRight: 10,
  },
  userSupervise: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#949494",
    borderRadius: 20,
    width: 70,
    height: 35,
  },
  buttonArea: {
    flex: 1,
    backgroundColor: "#e9e9e9",
    margin: 20,
  },
});

export default MyProfile;
