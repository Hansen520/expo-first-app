/*
 * @Date: 2023-11-09 10:13:19
 * @Description: description
 */
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Detail from "./src_29_Project/index";
import { Provider } from "react-redux";
import store from "./src_29_Project/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Detail />
      </NavigationContainer>
    </Provider>
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
