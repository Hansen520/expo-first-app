/*
 * @Date: 2023-11-24 11:12:32
 * @Description: description
 */
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { getNewsList } from "../../utils/api";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
export default () => {
  const [type, setType] = useState({ type: "top" });
  const [list, setList] = useState([]);
  const [types, setTypes] = useState([
    { key: "top", title: "头条" },
    { key: "shehui", title: "社会" },
    { key: "guonei", title: "国内" },
    { key: "guoji", title: "国际" },
    { key: "yule", title: "娱乐" },
    { key: "tiyu", title: "体育" },
    { key: "junshi", title: "军事" },
    { key: "keji", title: "科技" },
    { key: "caijing", title: "财经" },
    { key: "shishang", title: "时尚" },
  ]);
  useEffect(() => {
    getList();
  }, [type]);
  const getList = () => {
    getNewsList(type)
      .then((res) => {
        console.log(res, 33);
        setList(res);
      })
      .catch((err) => console.error(err));
  };
  const newsItem = ({ index, item }: any) => {
    return newsItemSingleImage({ index, item });
  };
  const newsItemSingleImage = ({ index, item }: any) => {
    return (
      <TouchableOpacity onPress={() => alert(item.url)}>
        <View style={[styles.newsItem1Container]}>
          <View style={[styles.newsItem1Text]}>
            <Text style={[styles.newsItem1Title]} numberOfLines={2}>
              {item.title}
            </Text>
            <View style={[styles.newsItem1Footer]}>
              <Text style={[styles.newsItem1Meta]} numberOfLines={1}>
                {item.date} {item.author_name}
              </Text>
              <Ionicons size={18} name={"heart-outline"} />
            </View>
          </View>
          <Image style={{ width: 120, height: 80, marginRight: 10 }} source={{ uri: item.thumbnail_pic_s ? item.thumbnail_pic_s : "https://" }} />
        </View>
      </TouchableOpacity>
    );
  };

  const newsType = ({ index, item }: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setType({ type: item.key });
        }}
      >
        <View style={{ width: 65, height: 46, padding: 10, backgroundColor: "#dfb" }}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      {list.length ? (
        <FlatList
          data={list}
          renderItem={newsItem}
          keyExtractor={(item: any) => item.uniquekey}
          ListHeaderComponent={() => {
            return (
              <FlatList
                horizontal
                data={types}
                keyExtractor={(item: any) => item.key}
                renderItem={newsType}
                initialScrollIndex={0}
              />
            );
          }}
        />
      ) : (
        <Text>加载中...</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  newsItem1Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  newsItem1Text: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: (Dimensions.get("window").width * 2) / 3 - 20,
  },
  newsItem1Title: {
    paddingHorizontal: 10,
    fontSize: 18,
    width: (Dimensions.get("window").width * 2) / 3,
    marginBottom: 20,
  },
  newsItem1Footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  newsItem1Meta: {
    fontSize: 13,
  },
  newsItem1Image: {
    width: Dimensions.get("window").width / 3,
    height: 80,
    marginVertical: 5,
    marginHorizontal: 10,
  },
});
