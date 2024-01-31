import { TouchableOpacity, Button, Text, View, StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "../screens/Home";
import TakePictureScreen from "../screens/Home/TakePicture";
import HomeApplication from "../screens/HomeApplication";

const Stack = createStackNavigator();
export default (prop: any) => {
  return (
    
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: "float",
      }}
    >
      
      <Stack.Screen name="小金的耍酷神器" component={TakePictureScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "首页",
          headerStyle: {
            backgroundColor: "#37ae1abb",
            elevation: 0, // 删除android opacity
            shadowOpacity: 0, // 删除 ios opacity
          },
          headerTintColor: "#fff",
          headerRight: () => (
            <TouchableOpacity onPress={() => prop.navigation.navigate("小金的耍酷神器")}>
              <Text style={{ fontSize: 18, color: "white", marginRight: 10 }}>拍照</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="homeApplication" component={HomeApplication} options={{
        title: '其他应用',
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
