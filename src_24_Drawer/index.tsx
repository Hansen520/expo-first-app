/*
 * @Date: 2023-11-21 14:05:15
 * @Description: description
 */
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, View } from "react-native";

function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={navigation.openDrawer} title="Open navigation drawer" />
      <Button onPress={() => navigation.navigate("Notifications")} title="我要去notifications" />
    </View>
  );
}

function NotificationsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={navigation.openDrawer} title="Open navigation drawer" />
      <Button onPress={() => navigation.goBack()} title="返回主页" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#ffffffcc",
          width: 180,
        },
        drawerPosition: "right",
        drawerType: "slide",
        drawerActiveTintColor: "#f00",
        drawerItemStyle: {
          marginVertical: 20,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "首页",
        }}
      />
      <Drawer.Screen
        options={{
          title: "通知",
        }}
        name="Notifications"
        component={NotificationsScreen}
      />
    </Drawer.Navigator>
  );
}
