/*
 * @Date: 2023-11-15 09:38:07
 * @Description: descriptio
 */
import React, { useState } from "react";
import { StyleSheet, Text, Button, View, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from "react-native";

function Detail() {
  return (
    <View style={[styles.container]}>
      <TouchableHighlight onPress={() => console.log('触发高亮组件')}>
        <View style={styles.items}>
          <Text>触碰高亮</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity onPress={() => console.log('触发高亮组件')}>
        <View style={styles.items}>
          <Text>触碰透明度的变化</Text>
        </View>
      </TouchableOpacity>

      <TouchableNativeFeedback onPress={() => console.log('触发高亮组件')}>
        <View style={styles.items}>
          <Text>触碰无响应</Text>
        </View>
      </TouchableNativeFeedback>
      <Text>高亮组件的应用</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  items: {
    borderWidth: 1,
    borderColor: '#f00',
    padding: 20
  }
});

export default Detail;
