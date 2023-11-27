/*
 * @Date: 2023-11-24 11:11:26
 * @Description: description
 */

import { TouchableOpacity, Button, Text, View, StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import UserScreen from "../screens/User";
import AboutScreen from '../screens/User/About';

const Stack = createStackNavigator();
export default (prop: any) => {
  return (
    <Stack.Navigator
      initialRouteName="User"
      screenOptions={{
        headerMode: "screen",
      }}
    >
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{
          title: "个人中心",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "关于",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
    </Stack.Navigator>
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

