/*
 * @Date: 2023-11-15 09:38:07
 * @Description: descriptio
 */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Detail() {
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.color, styles.color2]}>我是详情组件</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3a3a3a'
  },
  color: {
    color: 'blue'
  },
  // 有两个，后面会覆盖前面的
  color2: {
    color: 'green'
  }

});

export default Detail;
