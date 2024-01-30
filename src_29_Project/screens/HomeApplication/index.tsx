/*
 * @Date: 2023-11-17 14:06:30
 * @Description: description
 */
import { Camera, CameraType } from "expo-camera";
import React, { useState, useEffect, useRef } from "react";
import { TouchableOpacity, Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { WebView } from 'react-native-webview';

const HomeApplication = ({ route }: { route: any }) => {
  return <WebView source={{ uri: route.params.url}} style={{ marginTop: 20 }} />
};

const styles = StyleSheet.create({
 
});

export default HomeApplication;
