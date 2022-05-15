import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MealPlanHome from "../screens/MyPage/MealPlan/MealPlanHome";
import MealPlanWrite from "../screens/MyPage/MealPlan/MealPlanWrite";

const Stack = createStackNavigator();

const MealPlanNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
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
export default MealPlanNav;
