import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 폰트아이콘 관련
import {Ionicons, FontAwesome5, Entypo} from '@expo/vector-icons';

// 페이지 관련 import
import Home from '../screens/Home';
import MyPage from '../screens/MyPage';
import Workout from '../screens/Workout';
import Coach from '../screens/Coach';



const MainTab = createBottomTabNavigator();

const MainTabs = () => {

  return (
    <MainTab.Navigator
      sceneContainerStyle={{backgroundColor: "white",}}
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
      <MainTab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({focused, color, size}) => {
          return (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size}></Ionicons>
          )
        }
      }}>
      </MainTab.Screen>

      {/* 2번 탭 */}
      <MainTab.Screen name="MyPage" component={MyPage} options={{
        tabBarIcon: ({focused, color, size}) => {
          return (
            <Ionicons name={focused ? 'people' : 'people-outline'} color={color} size={size}></Ionicons>
          )
        }
      }}>
      </MainTab.Screen>

      {/* 3번 탭 */}
      <MainTab.Screen name="Workout" component={Workout} options={{
        tabBarIcon: ({focused, color, size}) => {
          return (
            <FontAwesome5 name={focused ? 'dumbbell' : 'dumbbell'} color={color} size={size}></FontAwesome5>
          )
        }
      }}>
      </MainTab.Screen>

      {/* 4번 탭 */}
      <MainTab.Screen name="Coach" component={Coach} options={{
        tabBarIcon: ({focused, color, size}) => {
          return (
            <Ionicons name={focused ? 'people' : 'people-outline'} color={color} size={size}></Ionicons>
          )
        }
      }}>
      </MainTab.Screen>

    </MainTab.Navigator>
  )

}

export default MainTabs;