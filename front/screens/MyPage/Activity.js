import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions } from 'react-native';


import Record from './Record';
import Accomplished from './Accomplished'

const Tab = createMaterialTopTabNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function Activity() {
  return (
    <Tab.Navigator
      initialLayout={{ width: windowWidth }}
      initialRouteName="Record"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15, color: "black" },
        tabBarStyle: { backgroundColor: "#ECB390", paddingVertical: 10 }
      }}
    >
      <Tab.Screen name="Record" component={Record} options={{ tabBarLabel: '기록' }} />
      <Tab.Screen name="Accomplished" component={Accomplished} options={{ tabBarLabel: '달성 기록' }} />
    </Tab.Navigator>
  );
}

export default Activity;

