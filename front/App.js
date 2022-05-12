import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabs from './navigation/MainTabs';
import MyPageNav from './navigation/MyPageNav'

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MainTabs' component={MainTabs} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='MyPageNav' component={MyPageNav} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}


