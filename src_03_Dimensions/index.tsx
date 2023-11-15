/*
 * @Date: 2023-11-15 09:38:07
 * @Description: descriptio
 */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

function Detail() {
  return (
    <View style={[styles.container]}>
      <View style={[styles.itemBase]}>
        <Text style={[styles.h3]}> 扫一扫 </Text>
      </View>
      <View style={[styles.itemBase]}>
        <Text style={[styles.h3]}> 付款码 </Text>
      </View>
      <View style={[styles.itemBase]}>
        <Text style={[styles.h3]}> 卡包 </Text>
      </View>
      <View style={[styles.itemBase]}>
        <Text style={[styles.h3]}> 出行 </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  itemBase: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b38a',
    width: Dimensions.get('window').width / 3,
    height: 90,
    borderWidth: 1,
    borderColor: 'yellow',
  },
  h3: {
    fontSize: 30
  }

});

export default Detail;
