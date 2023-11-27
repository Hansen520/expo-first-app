/*
 * @Date: 2023-11-24 11:10:03
 * @Description: description
 */
import { StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from "./HomeStack";
import NewsStack from "./NewsStack";
import UserStack from "./UserStack";

const TabBottom = createBottomTabNavigator();
const App = () => {
  return (
    <TabBottom.Navigator
      initialRouteName="News"
      screenOptions={({ route }: any) => ({
        TabBottomBarIcon: ({ focused, color, size }: any) => {
          let iconName: any;
          if (route.name === "Home") {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === "News") {
            iconName = focused ? 'settings' : 'person-outline'
          } else if (route.name === 'User') {
            iconName = focused ? 'settings' : 'person-outline'
          }
          return <Ionicons title={iconName} color={color} size={size} />;
        },
      })}
      tarBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <TabBottom.Screen name="Home" component={HomeStack} />
      <TabBottom.Screen name="News" component={NewsStack} />
      <TabBottom.Screen name="User" component={UserStack} />
    </TabBottom.Navigator>
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
