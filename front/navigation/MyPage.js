import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import MyPageMain from '../screens/MyPage/MyPage';
import Activity from '../screens/MyPage/Activity';
import ChangePhoto from '../screens/MyPage/ChangePhoto';


const Stack = createStackNavigator();


const MyPage = () => {
  return (

    <Stack.Navigator>
      <Stack.Screen name="ACTIVITY" component={Activity} options={{ headerShown: false }} />
      <Stack.Screen name="CHANGEPHOTO" component={ChangePhoto} options={{ headerShown: false }} />
    </Stack.Navigator>


  );
}
export default MyPage;

