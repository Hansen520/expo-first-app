/*
 * @Date: 2023-11-17 14:06:30
 * @Description: description
 */
import React, { useState, useEffect, useRef } from "react";
import { Platform, Text, View, StyleSheet, PermissionsAndroid, Alert } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import * as Location from 'expo-location';
import { useFocusEffect } from '@react-navigation/native';
import { WebView } from "react-native-webview";

// import * as Location from "expo-location";

export default function App() {
  const webViewRef = useRef<any>(null);
  // useEffect(() => {
  //   (async () => {
  //    console.log(1);
  //   })();
  // }, []);
  const handleMessage = (e: any) => {
    console.log(e, 23);
    if (!e) {
      return
    }
    const result = JSON.parse(e.nativeEvent.data)
    console.log(27);
    switch (result.event) {
      case 'getAddressSuccess': {
        const { position } = result.message
        // await this.loadAddressList(position)
        console.log(position, 31);
      }
        break
      case 'getAddressError': {
        //错误处理
        break
      }
      default:
        break
    }
  }
  const onLoadWebView = () => {
    console.log(4);
    webViewRef.current!.injectJavaScript(`onMessage({ event: 'getPosition' })`)

  }
  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        onMessage={e => {
          handleMessage(e)
        }}
        useWebKit={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        style={{ height: 1 }}
        onLoadEnd={onLoadWebView}
        source={{ uri: 'https://zhao-long950316.gitee.io' }}
        scrollEnabled={false}
      />
      <Text>111</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    marginTop: 30,
  },
  paragraph: {
    marginTop: 20,
  },
});
