/*
 * @Date: 2023-11-15 09:38:07
 * @Description: descriptio
 */
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View, Button, Alert } from "react-native";

function Detail() {
  const createTwoButtonAlert = () => {
    Alert.alert("警告标题", "警告内容", [
      {
        text: "确认",
        onPress: () => {
          console.log("Ok");
        },
        style: "default",
      },
      {
        text: "取消",
        onPress: () => {
          console.log("Cancel");
        },
        style: "cancel",
      },
    ]);
  };
  const createThreeButtonAlert = () => {
    Alert.alert("更新提示", "发现新版本，是否现在更新", [
      {
        text: "取消",
        onPress: () => {
          console.log("Ok");
        },
        style: "cancel",
      },
      {
        text: "确认",
        onPress: () => {
          console.log("Ok");
        },
        style: "default",
      },
      {
        text: "稍后再试",
        onPress: () => {
          console.log("稍后提醒");
        },
      },
    ]);
  };
  return (
    <View style={[styles.container]}>
      <Button
        title="alert"
        onPress={() => {
          alert("1111111111");
        }}
      />
      <Button
        title="我是一个按钮"
        onPress={() => {
          Alert.alert("我是一个按钮");
        }}
        color={"black"}
      />
      <Button
        title="两个按钮"
        onPress={createTwoButtonAlert}
        color={"green"}
      />
      <Button
        title="三个按钮"
        onPress={createThreeButtonAlert}
        color={"tomato"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    flexWrap: "wrap",
  },
  itemBase: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00b38a",
    width: Dimensions.get("window").width / 3,
    height: 90,
    borderWidth: 1,
    borderColor: "yellow",
  },
  h3: {
    fontSize: 30,
  },
});

export default Detail;
