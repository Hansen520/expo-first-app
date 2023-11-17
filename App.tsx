/*
 * @Date: 2023-11-09 10:13:19
 * @Description: description
 */
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Detail from "./src_23_BottomTab/index";

export default function App() {
  return (
    <NavigationContainer>
      <Detail />
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container }>
//       <Detail />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
