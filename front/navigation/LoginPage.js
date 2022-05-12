import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Register from "../screens/LoginPage/register";
import Search from "../screens/LoginPage/search";

const Stack = createStackNavigator();

const LoginPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default LoginPage;
