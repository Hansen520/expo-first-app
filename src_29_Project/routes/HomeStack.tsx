import { TouchableOpacity, Button, Text, View, StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";

const Stack = createStackNavigator();
const HomeStack = (prop: any) => {
  return (
    <Stack.Navigator initialRouteName="News" headerNode={"none"}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "首页",
          headerStyle: {
            backgroundColor: "tomato",
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => alert("hi Hello")}>
              <Text>Hello</Text>
            </TouchableOpacity>
          ),
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

export default HomeStack;
