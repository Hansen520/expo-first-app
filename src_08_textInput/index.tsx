/*
 * @Date: 2023-11-15 09:38:07
 * @Description: descriptio
 */
import React, { useState } from "react";
import { StyleSheet, Text, Button, View, TextInput, Dimensions } from "react-native";

function Detail() {
  const doLogin = () => {};
  return (
    <View style={[styles.container]}>
      <TextInput style={[styles.input]} placeholder="请输入用户名" onChangeText={() => {}} />
      <TextInput style={[styles.input]} placeholder="请输入密码" secureTextEntry onChangeText={() => {}} />
      <TextInput style={[styles.input]} placeholder="请输入数字" keyboardType="number-pad" onChangeText={() => {}} />
      <TextInput style={[styles.input]} placeholder="请输入介绍" multiline numberOfLines={5} textAlignVertical="top" onChangeText={() => {}} />
      <View style={[styles.btn]}>
        <Button title="登录" onPress={doLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    width: Dimensions.get("window").width - 20,
    margin: 10,
    borderWidth: 1,
    borderColor: "red",
    paddingHorizontal: 5,
  },
  btn: {
    width: Dimensions.get("window").width - 20,
    margin: 10,
  },
});

export default Detail;
