// import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Components/HomeScreen";
import CourtFinder from "./Components/CourtFinder";
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Court Finder" component={CourtFinder} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
