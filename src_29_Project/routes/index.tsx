import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import NewsStack from "./NewsStack";
import UserStack from "./UserStack";

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
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="News" component={NewsStack} />
      <Tab.Screen name="User" component={UserStack} />
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
