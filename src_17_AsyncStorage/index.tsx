/*
 * @Date: 2023-11-16 11:16:33
 * @Description: description
 */
import React, { useRef, useState } from "react";
import { Animated, Text, View, StyleSheet, Button, Dimensions } from "react-native";
import Storage from './storage';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  const pickerRef: any = useRef();

  return (
    <View>
      <Button title="获取" onPress={async () => alert( await Storage.get('key'))} />
      <Button title="存储" onPress={() => Storage.set('key', '泰山')} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slideImage: {
    width: Dimensions.get('window').width,
    height: 200,
  },
});

export default App;
