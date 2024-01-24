/*
 * @Date: 2023-11-24 11:10:03
 * @Description: description
 */
import { StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeStack from "./HomeStack";
import NewsStack from "./NewsStack";
import UserStack from "./UserStack";
import CounterStack from "./CounterStack";

const TabBottom = createBottomTabNavigator();
const App = () => {
  return (
    <TabBottom.Navigator
      initialRouteName="Home"
      screenOptions={({ route }: any) => ({
        tabBarInactiveTintColor: 'green',
        tabBarActiveTintColor: 'tomato',
        tabBarIcon: ({ focused, color, size }: any) => {
          let iconName: any;
          if (route.name === "Home") {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === "News") {
            iconName = focused ? 'aperture' : 'aperture-outline'
          } else if (route.name === 'User') {
            iconName = focused ? 'person' : 'person-outline'
          } else { 

            iconName = 'setting';
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}
    >
      <TabBottom.Screen key={'Home'} name="Home" options={{ headerShown: false }} component={HomeStack} />
      <TabBottom.Screen key={'News'} name="News" options={{ headerShown: false }} component={NewsStack} />
      <TabBottom.Screen key={'User'} name="User" options={{ headerShown: false }} component={UserStack} />
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
