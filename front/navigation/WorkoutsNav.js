import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ForYou from "../screens/Workouts/ForYou";
import Browse from "../screens/Workouts/Browse";
import Plans from "../screens/Workouts/Plans";
import StrengthMain from "../screens/Workouts/StrengthMain";
import StrengthDetail from "../screens/Workouts/StrengthDetail";
import Endurance from "../screens/Workouts/Endurance";
import Mobility from "../screens/Workouts/Mobility";
import Level1 from "../screens/Workouts/level1";
import Level2 from "../screens/Workouts/level2";
import Level3 from "../screens/Workouts/level3";
import Strength from "../screens/Workouts/Strength";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const Workouts = () => {
  return (
    <Tab.Navigator
      initialRouteName="ForYou"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15, color: "black" },
        tabBarStyle: { backgroundColor: "grey" },
      }}
    >
      <Tab.Screen
        name="ForYou"
        component={ForYou}
        options={{ tabBarLabel: "추천" }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{ tabBarLabel: "운동" }}
      />
      <Tab.Screen
        name="Plans"
        component={Plans}
        options={{ tabBarLabel: "내플랜" }}
      />
    </Tab.Navigator>
  );
};

const BrowseDetail = () => {
  return (
    <Tab.Navigator
      initialRouteName="Endurance"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15, color: "black" },

        tabBarStyle: { backgroundColor: "grey" },
      }}
    >
      <Tab.Screen
        name="Strength"
        component={Strength}
        options={{ tabBarLabel: "근력" }}
      />
      <Tab.Screen
        name="Endurance"
        component={Endurance}
        options={{ tabBarLabel: "지구력" }}
      />
      <Tab.Screen
        name="Mobility"
        component={Mobility}
        options={{ tabBarLabel: "활동성" }}
      />
    </Tab.Navigator>
  );
};

const StrengthNav = () => {
  return (
    <Stack.Navigator initialRouteName="StrengthDetail">
      <Stack.Screen name="StrengthDetail" component={StrengthDetail} />
    </Stack.Navigator>
  );
};

const LevelDetail = () => {
  return (
    <Tab.Navigator
      initialRouteName="LEVEL1"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15, color: "black" },

        tabBarStyle: { backgroundColor: "grey" },
      }}
    >
      <Tab.Screen
        name="Level1"
        component={Level1}
        options={{ tabBarLabel: "초급" }}
      />
      <Tab.Screen
        name="Level2"
        component={Level2}
        options={{ tabBarLabel: "중급" }}
      />
      <Tab.Screen
        name="Level3"
        component={Level3}
        options={{ tabBarLabel: "고급" }}
      />
    </Tab.Navigator>
  );
};

const WorkoutsNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Workouts" component={Workouts} />
      <Stack.Screen name="BrowseDetail" component={BrowseDetail} />
      <Stack.Screen name="LevelDetail" component={LevelDetail} />
      <Stack.Screen name="StrengthNav" component={StrengthNav} />
    </Stack.Navigator>

  );
};

export default WorkoutsNav;
