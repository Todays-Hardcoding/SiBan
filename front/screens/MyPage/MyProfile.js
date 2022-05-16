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

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", marginVertical: SIZES.padding * 2 }}>
        <View style={{ flex: 1 }}>
          <Text>프로필</Text>
          <Text style={{ color: COLORS.gray }}>마이페이지</Text>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.lightGray,
            }}
          >
            <Image
              source={icons.bell}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.secondary,
              }}
            />
            <View
              style={{
                position: "absolute",
                top: -5,
                right: -5,
                height: 10,
                width: 10,
                backgroundColor: COLORS.red,
                borderRadius: 5,
              }}
            ></View>
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
          }}>
          <Image
            source={images.banner}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 20,
            }}
          />
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
    const [shouldShow, setShouldShow] = useState(true);

    const renderPromoHeader = () => (
      <View
        style={{
          flexDirection: "row",
          marginBottom: SIZES.padding,
        }}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
          <Text>회원 관리</Text>
          <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
            <Text style={{ color: COLORS.gray }}>View All</Text>
          </TouchableOpacity>
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
            ) : MyProfileModify()}
          </View>
        </SafeAreaView>

      </View>
    );

    const renderItem = ({ item }) => (
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
      // state = {age:"", gender:"",height:"",weight:""}
      // const [value, setValue] = useState('김이나');

      var state = {
        tableHead: ["회원이름"],
        tableData: [
          ["나이", "22"],
          ["성별", "남"],
          ["키", "175"],
          ["몸무게", "70"],
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
