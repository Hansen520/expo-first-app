/*
 * @Date: 2023-11-09 10:13:19
 * @Description: description
 */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Detail from './src_19_Camera/index';

export default function App() {
  return (
    <View style={styles.container }>
      <Detail />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
