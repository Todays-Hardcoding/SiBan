import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, icons, images } from "../../constants";
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

  // const [features, setFeatures] = React.useState(featuresData);
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
        <View>
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

    const profileTest = () => {
      const url = "http://192.168.35.107:8282/userProfile.act";

      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          loginId,
          loginPw,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
      // .then((data) => console.log(JSON.stringify(data)))
      // .catch((error) => console.log(error));
    };

    const MyProfileModify = () => {
      const profileTest = () => {
        const url = "http://192.168.45.96:8282/checkUserInfo.act";
        fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userHeight,
            userWeight,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setuserHeight(data.userHeight);
            setuserWeight(data.userWeight);
          });
      };
      var state = {
        tableHead: ["회원이름"],
        tableData: [
          ["키", userHeight],
          ["몸무게", userWeight],
        ],
      };

      return (
        <View style={styles.container}>
          <View style={styles.profile}>
            <Table borderStyle={{ borderWidth: 2, borderColor: "black" }}>
              <Row
                data={state.tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              <Rows data={state.tableData} textStyle={styles.text} />
            </Table>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("OthersNav", { screen: "MyProfileModify" });
              }}
              style={styles.userProfile}
            >
              <Text style={styles.userProfileText}>정보수정</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={profileTest}>
              <Text style={styles.userProfileText}>정보확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };

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
    paddingTop: 30,
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
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default MyProfile;
