import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import CourtFinder from "./CourtFinder";
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Court Finder" component={CourtFinder} />
    </Tab.Navigator>
  );
};

export default App;
