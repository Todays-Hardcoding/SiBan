import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// 폰트아이콘 관련
import { Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";

// 페이지 관련 import
import MyPageNav from "../navigation/MyPageNav";
import WorkoutsNav from "./WorkoutsNav";
import MyBoardNav from "./MyBoardNav";

const MainTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <MainTab.Navigator
      sceneContainerStyle={{ backgroundColor: "white" }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#1e272e",
        },
        tabBarActiveTintColor: "#575fcf",
        tabBarInactiveTintColor: "#808e9b",
        headerStyle: {
          backgroundColor: "#1e272e",
        },
        headerTitleStyle: {
          color: "#808e9b",
        },
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      {/* 1번 탭 */}
      {/* <MainTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={color}
                size={size}
              ></Ionicons>
            );
          },
        }}
      ></MainTab.Screen> */}

      {/* 2번 탭 */}
      <MainTab.Screen
        name="마이페이지"
        component={MyPageNav}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "people" : "people-outline"}
                color={color}
                size={size}
              ></Ionicons>
            );
          },
        }}
      ></MainTab.Screen>

      {/* 3번 탭 */}
      <MainTab.Screen
        name="Workout"
        component={WorkoutsNav}
        options={{
          title: "운동",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <FontAwesome5
                name={focused ? "dumbbell" : "dumbbell"}
                color={color}
                size={size}
              ></FontAwesome5>
            );
          },
        }}
      ></MainTab.Screen>

      {/* 4번 탭 */}
      <MainTab.Screen
        name="고객센터"
        component={MyBoardNav}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "clipboard" : "clipboard-outline"}
                color={color}
                size={size}
              ></Ionicons>
            );
          },
        }}
      ></MainTab.Screen>
    </MainTab.Navigator>
  );
};

export default MainTabs;
