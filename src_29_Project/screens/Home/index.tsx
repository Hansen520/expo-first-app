/*
 * @Date: 2023-11-24 11:12:32
 * @Description: description
 */
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";

const Stack = createStackNavigator();
function HomeScreen() {
  return (
    <View>
      <ScrollView>
        <View style={[styles.container]}>
          <TouchableOpacity>
            <View style={[styles.itemBase]}>
              <Ionicons name="scan-outline" size={40} color={"#fff"} />
              <Text style={[styles.fontBase]}>到一扫</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.itemBase]}>
              <Ionicons name="qr-code-outline" size={40} color={"#fff"} />
              <Text style={[styles.fontBase]}>付款吗</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.itemBase]}>
              <Ionicons name="trail-sign-outline" size={40} color={"#fff"} />
              <Text style={[styles.fontBase]}>出走</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.itemBase]}>
              <Ionicons name="card-outline" size={40} color={"#fff"} />
              <Text style={[styles.fontBase]}>卡包</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  itemBase: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00b38a",
    height: 90,
    width: Dimensions.get("window").width / 4,
  },
  fontBase: {
    color: "#fff",
    fontSize: 14,
  },
  wrapper: {
    height: 200,
  },
  slideImage: {
    width: Dimensions.get("window").width,
    height: 200,
  },
});

export default HomeScreen;
