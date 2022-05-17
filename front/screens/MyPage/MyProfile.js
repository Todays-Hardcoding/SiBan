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

const MyProfile = ({ navigation }) => {
  const [userHeight, setuserHeight] = useState("");
  const [userWeight, setuserWeight] = useState("");
  const specialPromoData = [
    {
      id: 1,
      img: images.promoBanner,
      title: "내 루틴",
      description: "설정한 내 루틴을 확인해 보세요!",
      code: "Routine",
    },
    {
      id: 2,
      img: images.promoBanner,
      title: "일정 관리",
      description: "이번달 일정을 확인해 보세요",
      code: "OthersNav",
    },
    {
      id: 3,
      img: images.promoBanner,
      title: "기록",
      description: "달성 트로피를 확인해 보세요!",
      code: "ActivityNav",
    },
    {
      id: 4,
      img: images.promoBanner,
      title: "식단관리",
      description: "나에게 맞는 식단을 찾아보세요",
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
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>마이페이지</Text>
        </View>
        <View style={styles.userSupervise}>
          <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
            <Text>회원 관리</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

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
              source={require("../../assets/profile.png")}
              resizeMode="contain"
              style={{
                width: "70%",
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
          marginBottom: SIZES.padding,
        }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            margin: 20,
          }}
        >
          <View>
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
          </View>
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
          navigation.navigate(item.code);
        }}
      >
        <View
          style={{
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.primary,
          }}
        >
          <Image
            source={images.promoBanner}
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
          <Text>{item.title}</Text>
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
      const userId = "TTAA";

      const onScreenLoad = () => {
        const startUrl = "http://192.168.45.96:8282/showUserInfo.act";

        fetch(startUrl, {
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
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
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
    padding: 16,
    backgroundColor: "#fff",
  },
  head: {
    height: 40,
    backgroundColor: "#F5EEDC",
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
  userProfileText: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5EEDC",
    height: 30,
    width: "30%",
    borderRadius: 20,
  },
  modifyButton: {
    alignItems: "flex-end",
  },
  userSupervise: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5EEDC",
    borderRadius: 20,
    width: 70,
  },
});

export default MyProfile;
