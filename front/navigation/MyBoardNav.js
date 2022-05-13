import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FNA from "../screens/MyBoard/FNA";
import QNA from "../screens/MyBoard/QNA";
import BoardMain from "../screens/MyBoard/BoardMain"
import ChallengeDetail from "../screens/MyBoard/ChallengeDetail";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const ServiceCenter = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FNA" component={FNA} options={{ tabBarLabel: "FNA" }}
/>
      <Tab.Screen name="QNA" component={QNA} options={{ tabBarLabel: "QNA" }}
/>
    </Tab.Navigator>
  );
};

const ChallengeDetailNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChallengeDetail" component={ChallengeDetail} />
    </Stack.Navigator>
  );
};

const MyBoardNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BoardMain" component={BoardMain} />
      <Stack.Screen name="ServiceCenter" component={ServiceCenter} />
      <Stack.Screen name="ChallengeDetailNav" component={ChallengeDetailNav} />
    </Stack.Navigator>
  );
};

export default MyBoardNav;