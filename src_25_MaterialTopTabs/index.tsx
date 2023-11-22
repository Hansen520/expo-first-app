/*
 * @Date: 2023-11-21 14:05:15
 * @Description: description
 */
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


function OrderUnpayScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>待付款</Text>
    </View>
  );
}
function OrderPaidScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>待发货</Text>
    </View>
  );
}
function OrderSentScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>待收货</Text>
    </View>
  );
}

function OrderFinishedScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>待评价</Text>
    </View>
  );
}
const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <Tab.Navigator
      style={{ marginTop: 40 }}
      tabBarPosition={"bottom"}
      screenOptions={{
        tabBarStyle: {
          borderColor: "#f00",
        },
        tabBarActiveTintColor: "#fc0",
        tabBarInactiveTintColor: "#f00",
        showIcon: true,
      }}
    >
      <Tab.Screen
        name="OrderUnpayScreen"
        component={OrderUnpayScreen}
        options={{
          title: "待付款",
          tabBarIcon: ({ focused, color }) => {
            return <Text>😀</Text>;
          },
        }}
      />
      <Tab.Screen name="OrderPaidScreen" component={OrderPaidScreen} options={{ title: "待发货" }} />
      <Tab.Screen name="OrderSentScreen" component={OrderSentScreen} options={{ title: "待收货" }} />
      <Tab.Screen name="OrderFinishedScreen" component={OrderFinishedScreen} options={{ title: "待评价" }} />
    </Tab.Navigator>
  );
}
