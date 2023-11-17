/*
 * @Date: 2023-11-17 14:06:30
 * @Description: description
 */
/*
 * @Date: 2023-11-17 14:06:30
 * @Description: description
 */
import { Camera, CameraType } from "expo-camera";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Button, Text, View, StyleSheet, Dimensions } from "react-native";
import { DefaultNavigatorOptions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreen = (prop: any) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Home Screen</Text>
      <Button title="跳到新闻页面" onPress={() => prop.navigation.navigate("News")} />
    </View>
  );
};

const NewsScreen = (prop: any) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>News Screen</Text>
      <Button title="跳到主页" onPress={() => prop.navigation.navigate("Home")} />
    </View>
  );
};

const Stack = createStackNavigator();
const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="News" headerNode={"none"}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "首页",
            headerStyle: {
              backgroundColor: "tomato",
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => alert("hi Hello")}>
                <Text>Hello</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="News" component={NewsScreen} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default CameraScreen;


