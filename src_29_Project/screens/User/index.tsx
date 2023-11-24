import {View, Text, TouchableOpacity} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
function UserScreen() {
  return (
    <View>
      <Text>User</Text>
    </View>
  );
}

export default UserScreen;