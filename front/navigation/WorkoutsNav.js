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
import Level1 from '../screens/Workouts/level1';
import Level2 from '../screens/Workouts/level2';
import Level3 from '../screens/Workouts/level3';
import Strength from '../screens/Workouts/Strength';

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
      <Tab.Screen name="Browse" component={Browse} options={{ tabBarLabel: 'Browse' }} />
      <Tab.Screen name="Plans" component={Plans} options={{ tabBarLabel: 'My Plan' }} />
    </Tab.Navigator>
  )
}

const BrowseDetail = () => {
  return (
    <Tab.Navigator
      initialRouteName="Endurance"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15, color: "black" },
        tabBarStyle: { backgroundColor: "grey" }
      }}>
      <Tab.Screen name="Strength" component={Strength} />
      <Tab.Screen name="Endurance" component={Endurance} />
      <Tab.Screen name="Mobility" component={Mobility} />
    </Tab.Navigator>
  )
}

const StrengthNav = () => {
  return (
      <Stack.Navigator initialRouteName="StrengthDetail">
          <Stack.Screen name="StrengthDetail" component={StrengthDetail} />
      </Stack.Navigator>
  )
}

const ForYouNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ForYou" component={ForYou} />
      <Stack.Screen name="LevelNav" component={LevelNav} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const LevelNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='LEVEL1' component={Level1} />
      <Stack.Screen name='LEVEL2' component={Level2} />
      <Stack.Screen name='LEVEL3' component={Level3} />
    </Stack.Navigator>
  );
}

const WorkoutsNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Workouts" component={Workouts} />
      <Stack.Screen name="BrowseDetail" component={BrowseDetail} />
      <Stack.Screen name="StrengthNav" component={StrengthNav} />
    </Stack.Navigator>
  )
}


export default WorkoutsNav