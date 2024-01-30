import { TouchableOpacity, Button, Text, View, StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import NewsScreen from "../screens/News";
import DetailScreen from '../screens/Detail'

const Stack = createStackNavigator();
export default (prop: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
      }}
    >
      <Stack.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: "新闻",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#37ae1abb",
          },
        }}
      />
      <Stack.Screen name="NewsDetail" component={DetailScreen} options={{
        title: '新闻详情',
        headerStyle: {
          backgroundColor: '#fff'
        }
      }} />
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
