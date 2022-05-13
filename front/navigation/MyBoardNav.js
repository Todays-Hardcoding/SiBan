import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FNA from "../screens/MyBoard/FNA";
import QNA from "../screens/MyBoard/QNA";

const Tab = createMaterialTopTabNavigator();

const MyBoardNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FNA" component={FNA} />
      <Tab.Screen name="QNA" component={QNA} />
    </Tab.Navigator>
  );
};

export default MyBoardNav;
