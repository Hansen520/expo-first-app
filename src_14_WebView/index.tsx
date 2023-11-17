/*
 * @Date: 2023-11-16 11:16:33
 * @Description: description
 */
import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const App = () => {
  return <WebView source={{ html: '<h1><center>Hello world</center></h1>' }} style={{ marginTop: 20 }} />;
};

export default App;
