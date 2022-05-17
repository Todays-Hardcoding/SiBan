import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import QNAList from "../screens/MyBoard/QNAList";
import FNA from "../screens/MyBoard/FNA";
import QNA from "../screens/MyBoard/QNA";
import BoardMain from "../screens/MyBoard/BoardMain";
import ChallengeDetail from "../screens/MyBoard/ChallengeDetail";
import QNADetail from "../screens/MyBoard/QNADetail";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const ServiceCenter = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FNA" component={FNA} options={{ tabBarLabel: "FAQ" }} />
      <Tab.Screen
        name="QNA"
        component={QNA}
        options={{ tabBarLabel: "1:1 문의" }}
      />
      <Tab.Screen
        name="QNAList"
        component={QNAList}
        options={{ tabBarLabel: "QNA List 임시" }}
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

const QNADetailNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="QNADetail" component={QNADetail} />
    </Stack.Navigator>
  );
};

const MyBoardNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BoardMain" component={BoardMain} />
      <Stack.Screen name="ServiceCenter" component={ServiceCenter} />
      <Stack.Screen name="ChallengeDetailNav" component={ChallengeDetailNav} />
      <Stack.Screen name="QNADetailNav" component={QNADetailNav} />
    </Stack.Navigator>
  );
};

export default MyBoardNav;
