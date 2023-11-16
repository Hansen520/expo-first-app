/*
 * @Date: 2023-11-16 11:16:33
 * @Description: description
 */
import React, { useRef, useState } from "react";
import { Animated, ScrollView, View, StyleSheet, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  const pickerRef: any = useRef();

  return (
    <View>
      
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
