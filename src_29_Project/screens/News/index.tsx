/*
 * @Date: 2023-11-24 11:12:32
 * @Description: description
 */
import {View, Text, TouchableOpacity} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import NewsScreen from '../../routes/NewsStack';
import HomeScreen from '../../routes/HomeStack';

const Stack = createStackNavigator();
function News() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

export default News;
