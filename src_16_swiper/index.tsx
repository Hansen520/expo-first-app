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
    <ScrollView>
      <Swiper style={[styles.wrapper]} showsButtons autoplay>
        <Image
          style={[styles.slideImage]}
          source={{
            uri: "https://img1.baidu.com/it/u=2896517003,3289648395&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
          }}
        />
        <Image
          style={[styles.slideImage]}
          source={{
            uri: "https://img1.baidu.com/it/u=2082735885,3192093082&fm=253&fmt=auto&app=138&f=JPEG?w=497&h=325",
          }}
        />
        <Image
          style={[styles.slideImage]}
          source={{
            uri: "https://img1.baidu.com/it/u=3315572266,4007047345&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=247",
          }}
        />
      </Swiper>
    </ScrollView>
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
