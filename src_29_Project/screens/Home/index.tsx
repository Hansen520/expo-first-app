/*
 * @Date: 2023-11-24 11:12:32
 * @Description: description
 */
import { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Touchable,
  Alert,
  StatusBar,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";
import * as Location from "expo-location";
import { getCityInfo, getThreeDays, getDices } from "../../utils/api";
import { WebView } from "react-native-webview";
import { LinearGradient } from "expo-linear-gradient";

const Stack = createStackNavigator();
export default ({ navigation }: { navigation: any }) => {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [city, setCity] = useState<{
    adm1: string;
    adm2: string;
    country: string;
    name: string;
  }>();
  const webViewRef = useRef<any>(null);
  const [indices, setIndices] = useState<any>();
  const [threeDays, setThreeDays] = useState<any>();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      /* 用于判断当前是否有定位的权限 */
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      try {
        Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Highest,
          timeInterval: 1000,
          mayShowUserSettingsDialog: true,
        }).then((res) => {
          setLocation(res);
        });
        // setLocation(location);

        // const coords = {
        //   longitude: location.coords.longitude || 120.2052342,
        //   latitude: location.coords.latitude || 30.2489634,
        // };
        const coords = {
          longitude: location.longitude || "120.2052342",
          latitude: location.latitude || "30.2489634",
        };
        // console.log(coords, 58);
        const res = await Promise.all([getCityInfo(coords), getDices(coords), getThreeDays(coords)]);
        setCity(res[0]);
        setIndices(res[1]);
        setThreeDays(res[2]);
      } catch (err) {}
    })();
  }, [location]);

  const indicesItem = ({ index, item }: any) => {
    return (
      <TouchableOpacity
        key={"index" + item.type}
        onPress={() => {
          alert(item.type);
        }}
        style={[styles.indexContainer]}
      >
        <View style={[styles.indexItem]}>
          <Text style={[styles.indexName]}>{item.name}</Text>
          <Text style={[styles.indexBase]}>{item.category}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  /* 获取定位信息 */
  const handleMessage = (e: any) => {
    console.log(e, 23);
    if (!e) {
      return;
    }
    const result = JSON.parse(e.nativeEvent.data);
    console.log(27);
    switch (result.event) {
      case "getAddressSuccess":
        {
          const { position } = result.message;
          setLocation(position);
        }
        break;
      case "getAddressError": {
        //错误处理
        break;
      }
      default:
        break;
    }
  };
  const onLoadWebView = () => {
    webViewRef.current!.injectJavaScript(`onMessage({ event: 'getPosition' })`);
  };
  return (
    <View>
      <StatusBar backgroundColor={"#37ae1abb"} />
      <ScrollView>
        <View style={[styles.container]}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("homeApplication", {
                url: "https://m.baidu.com",
                title: "hello, 我是嘟嘟",
              })
            }
          >
            <View style={[styles.itemBase]}>
              <Ionicons name="scan-outline" size={40} color={"#fff"} />
              <Text style={[styles.fontBase]}>扫一扫</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("homeApplication", {
                url: "https://cn.bing.com/#",
                title: "hello, 我是嘟嘟",
              });
            }}
          >
            <View style={[styles.itemBase]}>
              <Ionicons name="qr-code-outline" size={40} color={"#fff"} />
              <Text style={[styles.fontBase]}>付款码</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("homeApplication", {
                url: "https://excalidraw.com/",
                title: "hello, 我是嘟嘟",
              });
            }}
          >
            <View style={[styles.itemBase]}>
              <Ionicons name="trail-sign-outline" size={40} color={"#fff"} />
              <Text style={[styles.fontBase]}>出行</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("homeApplication", {
                url: "https://www.doubao.com/chat/5128745716994",
                title: "hello, 我是嘟嘟",
              });
            }}
          >
            <View style={[styles.itemBase]}>
              <Ionicons name="card-outline" size={40} color={"#fff"} />
              <Text style={[styles.fontBase]}>卡包</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Swiper dotColor="#fff" activeDotColor="#37ae1abb" style={[styles.wrapper]} autoplay>
          {["https://picsum.photos/500/330", "https://picsum.photos/545/330", "https://picsum.photos/550/300"].map(
            (url, index) => (
              <Image
                key={index}
                style={[styles.slideImage]}
                source={{
                  uri: url,
                }}
              />
            )
          )}
        </Swiper>
        <View style={[styles.city]}>
          <Text style={[styles.cityText]}>
            {city?.country} {city?.adm1} {city?.adm2} {city?.name}
          </Text>
          <Text>{JSON.stringify(location)}</Text>
        </View>
        <View>
          <FlatList data={indices} renderItem={indicesItem} keyExtractor={(item: any) => item.type} horizontal />
        </View>
        <View style={[styles.dailyContainer]}>
          {threeDays &&
            threeDays.length &&
            threeDays.map((item: any, index: number) => {
              return (
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#d8f3d5", "#ecece1"]}
                  style={styles.dailyItem}
                >
                  <View>
                    <Text>
                      月升:{item.moonrise || "-"}~月降: {item.moonset}~月相:{item.moonPhase}~云量: {item.cloud}~压强:{" "}
                      {item.pressure}
                    </Text>
                  </View>
                  <View style={[styles.dailyItemTitle]}>
                    <Text style={[styles.fxDate]}>{item.fxDate}</Text>
                    <Text>
                      升{item.sunrise}~落{item.sunset}
                    </Text>
                  </View>

                  <View style={[styles.dailyItemContent]}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <Text>{item.textDay}~</Text>
                      <Text>
                        {item.windDirNight}
                        {item.windScaleDay}级~
                      </Text>
                      <Text>湿度{item.humidity}</Text>
                    </View>
                    <View>
                      <Text>
                        {item.tempMin}°~{item.tempMax}°
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
              );
            })}
        </View>
      </ScrollView>
      {!location && (
        <WebView
          ref={webViewRef}
          onMessage={(e) => {
            handleMessage(e);
          }}
          style={{ height: 1, width: 1, position: "absolute", top: 0, left: 0, display: "none" }}
          onLoadEnd={onLoadWebView}
          source={{ uri: "https://zhao-long950316.gitee.io" }}
        />
      )}
      {/* <Text>{JSON.stringify(location)}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  itemBase: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#37ae1abb",
    height: 90,
    width: Dimensions.get("window").width / 4,
  },
  fontBase: {
    color: "#fff",
    fontSize: 14,
  },
  wrapper: {
    height: 220,
  },
  slideImage: {
    width: Dimensions.get("window").width,
    height: 220,
  },
  city: {
    flex: 1,
    justifyContent: "center",
  },
  cityText: {
    fontSize: 20,
    marginHorizontal: 10,
    color: "#00b38a",
  },
  indexContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginLeft: 10,
  },
  indexItem: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#deb",
    width: Dimensions.get("window").width / 3 - 10,
    height: 80,
    marginTop: 10,
    marginRight: 10,
  },
  fxDate: {
    color: "#00b38a",
    fontSize: 16,
  },
  indexName: {
    color: "#222",
    fontSize: 14,
  },
  indexBase: {
    color: "#00b38a",
    fontSize: 15,
  },
  dailyContainer: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
    textAlign: "center",
  },
  dailyItem: {
    backgroundColor: "#e7d8d877",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    width: Dimensions.get("window").width - 20,
    marginTop: 10,
    marginHorizontal: 10,
  },
  dailyItemTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 40,
    fontSize: 18,
    marginTop: 8,
  },
  dailyItemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 40,
    alignItems: "center",
    marginBottom: 10,
  },
});
