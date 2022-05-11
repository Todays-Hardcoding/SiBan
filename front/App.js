import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainTabs from './navigation/MainTabs';


export default function App() {
  return (
    
    <NavigationContainer>
      <MainTabs></MainTabs>
    </NavigationContainer>

  );
}


