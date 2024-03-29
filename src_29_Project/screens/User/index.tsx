/*
 * @Date: 2023-11-24 11:13:19
 * @Description: description
 */
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default ({ navigation }: any) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <StatusBar backgroundColor={'#37ae1abb'} />
        <View style={[styles.avatar]}>
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={{
              width: 80,
              height: 80,
              marginVertical: 10,
              borderRadius: 40,
            }}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <View style={[styles.listItem]}>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name={'information-circle-outline'} size={20} color={'#89a311'} />
              <Text style={{ marginLeft: 10 }}>关于</Text>
            </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('aaa')}>
          <View style={[styles.listItem]}>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name={'settings-outline'} size={20} color={'#9a190d'} />
              <Text style={{ marginLeft: 10 }}>设置</Text>
            </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
          <View style={[styles.listItem]}>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name={'settings-outline'} size={20} color={'#2d3'} />
              <Text style={{ marginLeft: 10 }}>计数器</Text>
            </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'} />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={[styles.listItem]}>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name={'settings-outline'} size={20} color={'#a173cb'} />
              <Text style={{ marginLeft: 10 }}>登录</Text>
            </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Logout')}>
          <View style={[styles.listItem]}>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name={'settings-outline'} size={20} color={'#177575'} />
              <Text style={{ marginLeft: 10 }}>退出</Text>
            </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  avatar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 50,
    paddingHorizontal: 20
  }

});
