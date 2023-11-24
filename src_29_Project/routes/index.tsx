import { StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from "./HomeStack";
import NewsStack from "./NewsStack";
import UserStack from "./UserStack";

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
        tabBarIcon: ({ focused, color, size }: any) => {
          let iconName: any;
          console.log(route, focused, color, size, 15);
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
