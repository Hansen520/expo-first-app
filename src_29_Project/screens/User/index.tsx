import {View, Text, TouchableOpacity} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import NewsScreen from '../../routes/NewsStack';
import HomeScreen from '../../routes/HomeStack';

const Stack = createStackNavigator();
function User() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

export default User;