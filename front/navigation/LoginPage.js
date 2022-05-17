import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CancelButton from "../components/CancelButton";
// import Login from "../screens/Home";
import LoginHome from "../screens/LoginPage/LoginHome";
import Register from "../screens/LoginPage/Register";
import Search from "../screens/LoginPage/Search";


const Stack = createStackNavigator();

const LoginPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginHome"
        component={LoginHome}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      /> */}
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
