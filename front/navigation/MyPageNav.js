import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions } from "react-native";
import React from "react";

import ChangePhoto from "../screens/MyPage/ChangePhoto";
import MyPageMain from "../screens/MyPage/MyPage";
import Record from "../screens/MyPage/Record";

import RoutineRecord from "../screens/MyPage/RoutineRecord";
import Accomplished from "../screens/MyPage/Accomplished";
import MyProfile from "../screens/MyPage/MyProfile";

const Tab = createMaterialTopTabNavigator();
const windowWidth = Dimensions.get("window").width;
const Stack = createStackNavigator();

const MyPage = () => {
  return (
    <Stack.Navigator initialRouteName="MYPAGE">
      <Stack.Screen
        name="MyPageMain"
        component={MyPageMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ACTIVITY" component={Activity} />
      <Stack.Screen
        name="BtnPage"
        component={BtnPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const BtnPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CHANGEPHOTO" component={ChangePhoto} />
      <Stack.Screen name="RECORD" component={Record} />
      <Stack.Screen name="MYPROFILE" component={MyProfile} />
    </Stack.Navigator>
  );
};

const Activity = () => {
  return (
    <Tab.Navigator
      initialLayout={{ width: windowWidth }}
      initialRouteName="ROUTINERECORD"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15, color: "black" },
        tabBarStyle: { backgroundColor: "#ECB390", paddingVertical: 10 },
      }}
    >
      <Tab.Screen
        name="ROUTINERECORD"
        component={RoutineRecord}
        options={{ tabBarLabel: "기록" }}
      />
      <Tab.Screen
        name="ACCOMPLISHED"
        component={Accomplished}
        options={{ tabBarLabel: "달성 기록" }}
      />
    </Tab.Navigator>
  );
};

const MyPageNav = () => {
  return (
    <Stack.Navigator initialRouteName="MYPAGE">
      <Stack.Screen
        name="MYPAGE"
        component={MyPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Activity" component={Activity} />
      <Stack.Screen name="BtnPage" component={BtnPage} />
    </Stack.Navigator>
  );
};

export default MyPageNav;
