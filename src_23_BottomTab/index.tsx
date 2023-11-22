/*
 * @Date: 2023-11-17 17:25:17
 * @Description: description
 */
import { Camera, CameraType } from "expo-camera";
import { TouchableOpacity, Button, Text, View, StyleSheet, Dimensions } from "react-native";
import { DefaultNavigatorOptions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeScreen = (prop: any) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Home Screen</Text>
      <Button title="跳到新闻页面" onPress={() => prop.navigation.navigate("News")} />
    </View>
  );
};

const NewsScreen = (prop: any) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>News Screen</Text>
      <Button title="跳到主页" onPress={() => prop.navigation.navigate("Home")} />
    </View>
  );
};

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
