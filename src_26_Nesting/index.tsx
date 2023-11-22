/*
 * @Date: 2023-11-21 14:05:15
 * @Description: description
 */
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, View, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Feed({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate('Profile')} title="跳转Profile" />
      <Button onPress={() => navigation.navigate("Settings")} title="跳转Settings" />
    </View>
  );
}

function Message({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate('Profile')} title="跳转Profile" />
    </View>
  );
}

function FeedProfile({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate('Profile')} title="跳转Profile" />
    </View>
  );
}

function MessageProfile({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate('Profile')} title="跳转Profile" />
    </View>
  );
}

function FeedSettings({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate('Profile')} title="跳转Profile" />
    </View>
  );
}

function MessageSettings({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate('Profile')} title="跳转Profile" />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Home = () => {
  return <Tab.Navigator>
    <Tab.Screen name="HomeFeed" component={Feed}/>
    <Tab.Screen name="HomeMessage" component={Message}/>
  </Tab.Navigator>
}
const Profile = () => {
  return <Tab.Navigator>
    <Tab.Screen name="ProfileFeed" component={FeedProfile}/>
    <Tab.Screen name="ProfileMessage" component={MessageProfile}/>
  </Tab.Navigator>
}
const Settings = () => {
  return <Tab.Navigator>
    <Tab.Screen name="SettingsFeed" component={FeedSettings}/>
    <Tab.Screen name="SettingsMessage" component={MessageSettings}/>
  </Tab.Navigator>
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Settings" component={Settings}/>
    </Stack.Navigator>
  );
}
