/*
 * @Date: 2023-11-23 17:39:50
 * @Description: description
 */
import { View, Button, Text, StatusBar, Alert } from 'react-native';

export default function App() {
  const getData = () => {
    const key = '105fd0f356134f7088167120c94b5955';
    const location = '116.41,39.92';
    const url = `https://devapi.qweather.com/v7/weather/3d?key=${key}&location=${location}`;
    fetch(url, {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        Alert.alert('成功', '请求成功');
      })
      .catch((err) => {
        Alert.alert('报错', JSON.stringify(err));
      });
  };
  return (
    <View>
      <StatusBar hidden backgroundColor={'red'} barStyle={'dark-content'} />
      <Button title="点击获取数据" onPress={() => getData()} />
    </View>
  );
}
