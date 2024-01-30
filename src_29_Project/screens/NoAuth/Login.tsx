/*
 * @Date: 2023-11-24 11:12:32
 * @Description: description
 */
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Platform,
  TextInput,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const Stack = createStackNavigator();
export default () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [IsValidateUser, setIsValidateUser] = useState<boolean>(false);
  const [IsValidatePassword, setIsValidatePassword] = useState<boolean>(false);

  const validateUsername = (val: string) => {
    if (val.trim().length >= 2) {
      setUsername(val);
      setIsValidateUser(true);
    } else {
      setUsername(val);
      setIsValidateUser(false);
    }
  };
  const validatePassword = (val: string) => {
    if (val.trim().length >= 2) {
      setPassword(val);
      setIsValidatePassword(true);
    } else {
      setPassword(val);
      setIsValidatePassword(false);
    }
  }
  const handleValideUser = (val: string) => {
    if (val.trim().length >= 2) {
      setIsValidateUser(true);
    } else {
      setIsValidateUser(false);
    }
  };
  return (
    <View style={[styles.container]}>
      <ImageBackground
        style={[styles.bgImage]}
        source={require('../../image/bg.jpg')}
      >
        <View style={[styles.header]}>
          <Text style={[styles.headerText]}>Welcome!</Text>
        </View>
        <Animatable.View animation={'fadeInUpBig'} style={[styles.footer]}>
          <ScrollView>
            <View style={[styles.action]}>
              <Ionicons name={'person-outline'} size={20} />
              <TextInput
                style={[styles.input]}
                placeholder="请输入用户名"
                value={username}
                onChangeText={(val) => {
                  validateUsername(val);
                }}
                onEndEditing={(e) => handleValideUser(e.nativeEvent.text)}
              />
              {IsValidateUser ? (
                <Animatable.View animation="bounceIn">
                  <Ionicons name={'checkmark-circle-outline'} size={20} />
                </Animatable.View>
              ) : null}
            </View>
            {IsValidateUser ? null : (
              <Animatable.View animation={'fadeInLeft'} duration={500}>
                <Text style={[styles.errorMsg]}>用户名最短是 2 位</Text>
              </Animatable.View>
            )}
            <View style={[styles.action]}>
              <Ionicons name={'lock-closed-outline'} size={20} />
              <TextInput
                style={[styles.input]}
                placeholder="请输入密码"
                value={password}
                secureTextEntry
                onChangeText={(val) => {
                  validatePassword(val);
                }}
                onEndEditing={(e) => handleValideUser(e.nativeEvent.text)}
              />
              {IsValidatePassword ? (
                <Animatable.View animation="bounceIn">
                  <Ionicons name={'checkmark-circle-outline'} size={20} />
                </Animatable.View>
              ) : null}
            </View>
            {IsValidatePassword ? null : (
              <Animatable.View animation={'fadeInLeft'} duration={500}>
                <Text style={[styles.errorMsg]}>密码最短是 2 位</Text>
              </Animatable.View>
            )}

            <View>
              <Text>登录</Text>
            </View>
            <View>
              <Text>注册</Text>
            </View>
            
          </ScrollView>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    padding: Platform.OS === 'ios' ? 150 : 100,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  input: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -5,
    paddingLeft: 10,
    color: '#05375a',
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  errorMsg: {
    color: 'tomato',
    fontSize: 14,
  },
});
