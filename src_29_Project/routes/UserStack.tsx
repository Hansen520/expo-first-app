/*
 * @Date: 2023-11-24 11:11:26
 * @Description: descriptio
 */
import { TouchableOpacity, Button, Text, View, StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import UserScreen from '../screens/User';

const Stack = createStackNavigator();
const UserStack = (prop: any) => {
  return (
    <Stack.Navigator initialRouteName="News" headerNode={"none"}>
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{
            title: "用户",
            headerStyle: {
              backgroundColor: "tomato",
            },
            // headerRight: () => (
            //   <TouchableOpacity onPress={() => alert("hi Hello")}>
            //     <Text>Hello</Text>
            //   </TouchableOpacity>
            // ),
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

export default UserStack;
