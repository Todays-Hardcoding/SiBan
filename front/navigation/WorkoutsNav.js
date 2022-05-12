import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ForYou from '../screens/Workouts/ForYou';
import Browse from '../screens/Workouts/Browse';
import Plans from '../screens/Workouts/Plans';
import StrengthMain from '../screens/Workouts/StrengthMain';
import StrengthDetail from '../screens/Workouts/StrengthDetail';
import Endurance from '../screens/Workouts/Endurance';
import Mobility from '../screens/Workouts/Mobility';
import level1 from '../screens/Workouts/level1';
import level2 from '../screens/Workouts/level2';
import level3 from '../screens/Workouts/level3';

const Tab = createMaterialTopTabNavigator()
const Stack = createNativeStackNavigator()

const Workouts = () => {
  return (
    <Tab.Navigator
      initialRouteName="ForYou"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15, color: "black" },
        tabBarStyle: { backgroundColor: "grey" }
      }}>
      <Tab.Screen name="ForYouNav" component={ForYouNav} options={{ tabBarLabel: 'For You' }} />
      <Tab.Screen name="BrowseNav" component={BrowseNav} options={{ tabBarLabel: 'Browse' }} />
      <Tab.Screen name="Plans" component={Plans} options={{ tabBarLabel: 'My Plan' }} />
    </Tab.Navigator>
  )
}

const BrowseNav = () => {
  return (
    <Stack.Navigator initialRouteName="BrowseMain" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Browse" component={Browse} />
      <Stack.Screen name="Strength" component={Strength} />
      <Stack.Screen name="Endurance" component={Endurance} />
      <Stack.Screen name="Mobility" component={Mobility} />
    </Stack.Navigator>
  )
}

const Strength = () => {
  return (
    <Stack.Navigator initialRouteName="StrengthMain" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StrengthMain" component={StrengthMain} />
      <Stack.Screen name="StrengthDetail" component={StrengthDetail} />
    </Stack.Navigator>
  )
}

const ForYouNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ForYou" component={ForYou} />
      <Stack.Screen name="levelNav" component={LevelNav} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const LevelNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='LEVEL1' component={level1} />
      <Stack.Screen name='LEVEL2' component={level2} />
      <Stack.Screen name='LEVEL3' component={level3} />
    </Stack.Navigator>
  );
}

const WorkoutsNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Workouts' component={Workouts} />
    </Stack.Navigator>
  )
}

export default WorkoutsNav