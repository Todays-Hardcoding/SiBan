import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import Accomplished from '../screens/MyPage/Accomplished';
import Activity from '../screens/MyPage/Activity';
import ChangePhoto from '../screens/MyPage/ChangePhoto';
import Record from '../screens/MyPage/Record'
import RoutineRecord from '../screens/MyPage/RoutineRecord'


const Stack = createStackNavigator();


const MyPage = () => {
  return (

    <Stack.Navigator>
      <Stack.Screen name="ACTIVITY" component={Activity} />
      <Stack.Screen name="CHANGEPHOTO" component={ChangePhoto} />

      <Stack.Screen name="RECORD" component={Record} />

    </Stack.Navigator>


  );
}
export default MyPage;

