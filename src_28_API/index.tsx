/*
 * @Date: 2023-11-23 17:39:50
 * @Description: description
 */
import { View, Button, Text, TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const url = 'https://devapi.qweather.com/v7/weather/3d'


export default function App() {

  const getData = () => {
    let key = '105fd0f356134f7088167120c94b5955';
    let location = '116.41,39.92';

  }
  return (
    <View>
      <Button title="点击获取数据" onPress={() => getData()}/>

    </View>
  );
}