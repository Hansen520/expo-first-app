/*
 * @Date: 2023-11-15 09:38:07
 * @Description: descriptio
 */
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

function Detail() {

  return (
    <View style={[styles.container]}>
      <Image style={[styles.ItemImage]} source={require('./Image/poster.png')}/>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  ItemImage: {
    height: 200,
    width: Dimensions.get('window').width
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginVertical: 20
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default Detail;
