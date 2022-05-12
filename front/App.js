import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainTabs from './navigation/MainTabs';
import MyPage from './navigation/MyPage'
import LoginPage from './navigation/LoginPage';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MainTabs' component={MainTabs} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='MyPage' component={MyPage}></Stack.Screen>
        <Stack.Screen name='LoginPage' component={LoginPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}