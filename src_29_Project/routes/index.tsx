import { Camera, CameraType } from "expo-camera";
import { TouchableOpacity, Button, Text, View, StyleSheet, Dimensions } from "react-native";
import { DefaultNavigatorOptions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./HomeStack";
import NewsScreen from "./NewsStack";
import UserScreen from "./UserStack";

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <Tab.Navigator
      // screenOptions={({ route }: any) => ({
      //   tabBarIcon: ({ focused, color, size }: any) => {
      //     let iconName: any;
      //     if (route.name === "Home") {
      //       iconName = "首页";
      //     } else if (route.name === "News") {
      //       iconName = "新闻";
      //     }
      //     return <Button title={iconName} color={color} />;
      //   },
      // })}
      tarBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default App;
