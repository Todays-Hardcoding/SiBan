import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, icons, images } from "../../constants";

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
          <Image
            source={require("../../assets/profile.png")}
            resizeMode="contain"
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

    const renderPromoHeader = () => (
      <View
        style={{
          flexDirection: "row",
          marginBottom: SIZES.padding,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text>회원 관리</Text>
        </View>
        <TouchableOpacity onPress={() => console.log("View All")}>
          <Text style={{ color: COLORS.gray }}>View All</Text>
        </TouchableOpacity>
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

    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={specialPromos}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
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

export default MyProfile;
