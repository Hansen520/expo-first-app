/*
 * @Date: 2023-11-24 11:12:32
 * @Description: description
 */
import {View, Text, TouchableOpacity} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

export default Home;
