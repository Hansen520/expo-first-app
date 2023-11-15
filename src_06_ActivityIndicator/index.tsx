/*
 * @Date: 2023-11-15 09:38:07
 * @Description: descriptio
 */
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View, ActivityIndicator, Platform } from "react-native";

function Detail() {
  if (Platform.OS === 'android') {
    alert('当前为安卓环境');
  } else if(Platform.OS === 'ios') {
    alert('当前为IOS环境');
  }

  return (
    <View style={[styles.container]}>
      <ActivityIndicator color={'blue'} size={'large'} />
      <ActivityIndicator color={'green'} size={'small'} />
      <ActivityIndicator color={'yellow'} size={80} />
      <ActivityIndicator color={'black'} size={90} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

export default Detail;
