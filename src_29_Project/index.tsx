/*
 * @Date: 2023-11-23 17:39:50
 * @Description: description
 */
import { View, Button, Text, TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainTab from './routes'


export default function App() {

  const getData = () => {
    let key = '105fd0f356134f7088167120c94b5955';
    let location = '116.41,39.92';

  }
  return (
    <MainTab />
  );
}