/*
 * @Date: 2023-11-15 09:38:07
 * @Description: descriptio
 */
import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";

function Detail() {
  return (
    <ScrollView style={[styles.container]}>
      <Text>flexDirection: 'row'</Text>
      <View style={[styles.wrapper]}>
        <View style={[styles.flex1]}>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>1</Text>
          </View>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>2</Text>
          </View>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>3</Text>
          </View>
        </View>
      </View>
      <Text>flexDirection: 'column'</Text>
      <View style={[styles.wrapper]}>
        <View style={[styles.flex2]}>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>1</Text>
          </View>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>2</Text>
          </View>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>3</Text>
          </View>
        </View>
      </View>
      <Text>flex: 1,alignItems: 'center',</Text>
      <View style={[styles.wrapper]}>
        <View style={[styles.flex3]}>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>1</Text>
          </View>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>2</Text>
          </View>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>3</Text>
          </View>
        </View>
      </View>
      <Text>flex: 1,alignItems: 'flex-end',</Text>
      <View style={[styles.wrapper]}>
        <View style={[styles.flex4]}>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>1</Text>
          </View>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>2</Text>
          </View>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>3</Text>
          </View>
        </View>
      </View>
      <Text>flex: 1,justifyContent: 'center',</Text>
      <View style={[styles.wrapper]}>
        <View style={[styles.flex5]}>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>1</Text>
          </View>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>2</Text>
          </View>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>3</Text>
          </View>
        </View>
      </View>
      <Text>flex: 1,justifyContent: 'center',alignItems: 'center',</Text>
      <View style={[styles.wrapper]}>
        <View style={[styles.flex6]}>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>1</Text>
          </View>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>2</Text>
          </View>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>3</Text>
          </View>
        </View>
      </View>
      <Text>flexDirection:"row", flex: 1, justifyContent: 'space-between', alignItems: 'center'</Text>
      <View style={[styles.wrapper]}>
        <View style={[styles.flex7]}>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>1</Text>
          </View>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>2</Text>
          </View>
          <View style={[styles.color]}>
            <Text style={[styles.text]}>3</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    marginTop: 100,
    marginLeft: 2,
  },
  wrapper: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: "green",
  },
  flex1: {
    flexDirection: "row",
  },
  flex2: {
    flexDirection: "column",
  },
  flex3: {
    flex: 1,
    alignItems: "center",
  },
  flex4: {
    flex: 1,
    alignItems: "flex-end",
  },
  flex5: {
    flex: 1,
    justifyContent: "center",
  },
  flex6: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flex7: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  color: {
    width: 30,
    height: 30,
    backgroundColor: "tomato",
    borderRadius: 30,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },
});

export default Detail;
