/*
 * @Date: 2023-11-15 09:38:07
 * @Description: descriptio
 */
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View, Button, Alert, StatusBar, Switch } from "react-native";

function Detail() {
  const [value, setValue] = useState(false);
  return (
    <View style={[styles.container]}>
      <StatusBar hidden={value} backgroundColor={"red"} barStyle={"dark-content"} />

      <Switch
        trackColor={{ false: "#999", true: "#666" }}
        thumbColor={value ? '#f00': '#fff'}
        value={value}
        onValueChange={(e) => {
          console.log(e, 14);
          setValue(e);
        }}
      />
      <Text>111</Text>
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
