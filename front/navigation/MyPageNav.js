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

import MealPlanHome from "../screens/MyPage/MealPlan/MealPlanHome";
import MealPlanWrite from "../screens/MyPage/MealPlan/MealPlanWrite";

import MyProfileModify from "../screens/MyPage/MyProfileModify";

const Tab = createMaterialTopTabNavigator();
const windowWidth = Dimensions.get("window").width;
const Stack = createStackNavigator();

const OthersNav = () => {
  return (
    <Stack.Navigator initialRouteName="Record">
      <Stack.Screen
        name="ChangePhoto"
        component={ChangePhoto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Record"
        component={Record}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyProfileModify"
        component={MyProfileModify}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ActivityNav = () => {
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

const MealPlanNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="MealPlanHome"
      screenOptions={{ presentation: "modal" }}
    >
      <Stack.Screen
        name="MealPlanHome"
        component={MealPlanHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MealPlanWrite"
        component={MealPlanWrite}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MyPageNav = () => {
  return (
    <Stack.Navigator initialRouteName="MYPAGE">
      <Stack.Screen
        name="MYPAGE"
        component={MyProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ActivityNav"
        component={ActivityNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MealPlanNav"
        component={MealPlanNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OthersNav"
        component={OthersNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MyPageNav;
