import { TouchableOpacity, Button, Text, View, StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import NewsScreen from "../screens/News";

const Stack = createStackNavigator();
const NewsStack = (prop: any) => {
  return (
    <Stack.Navigator initialRouteName="News" headerNode={"none"}>
      <Stack.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: "新闻",
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

export default NewsStack;
