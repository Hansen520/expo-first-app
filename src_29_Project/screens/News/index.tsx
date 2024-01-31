/*
 * @Date: 2023-11-24 11:12:32
 * @Description: description
 */
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { getNewsList } from "../../utils/api";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import newData from '../../utils/json';
import { } from '@react-navigation/stack'
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
export default ({ navigation }: { navigation: any }) => {
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
    // setList([...newData])
  }, [type]);
  const getList = () => {
    getNewsList(type)
      .then((res) => {
        setList(res);
      })
      .catch((err) => console.error(err));
  };
  const newsItem = ({ index, item }: any) => {
    if (item.thumbnail_pic_s02 && item.thumbnail_pic_s03) {
      return newsItemThreeImages({ index, item });
    } else {
      return newsItemSingleImage({ index, item });
    }
    
  };
  const newsItemSingleImage = ({ index, item }: any) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('NewsDetail', {
        url: item.url,
        title: item.title,
        uniquekey: item.uniquekey
      })}>
        <StatusBar backgroundColor={'#37ae1abb'} />
        <View style={[styles.newsItem1Container]}>
          <View style={[styles.newsItem1Text]}>
            <Text style={[item.thumbnail_pic_s ? styles.newsItem1Title : styles.newsItem2Title]} numberOfLines={2}>
              {item.title}
            </Text>
            <View style={[styles.newsItem1Footer]}>
              <Text style={[styles.newsItem1Meta]} numberOfLines={1}>
                {item.date} {item.author_name}
              </Text>
              <Ionicons size={18} name={"heart-outline"} />
            </View>
          </View>
          <View style={[styles.newsItem1Image]}>
            <Image  style={{ width: 120, height: 80 }} source={{ uri: item.thumbnail_pic_s ? item.thumbnail_pic_s : "https://" }} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const newsItemThreeImages = ({ index, item }: {index: number, item: any}) => {
    return (<TouchableOpacity
      onPress={() => navigation.navigate('NewsDetail', {
        url: item.url,
        title: item.title,
        uniquekey: item.uniquekey
      })}
      style={{marginVertical: 5}}
    >
      <View style={[styles.newsItemContainer]}>
        <Text style={[styles.newsItemHeader]} numberOfLines={2} ellipsizeMode='tail'>
          {item.title}
        </Text>
        <View>
          <View style={[styles.newsItemImageContainer]}>
            <Image source={{ uri: item.thumbnail_pic_s }} style={[styles.newsItemImage]} />
            <Image source={{ uri: item.thumbnail_pic_s02 }} style={[styles.newsItemImage]} />
            <Image source={{ uri: item.thumbnail_pic_s03 }} style={[styles.newsItemImage]} />
          </View>
        </View>
        <View style={[styles.newsItem1Footer]}>
          <Text style={[styles.newsItem1Meta]} numberOfLines={1}>
            {item.date} {item.author_name}
          </Text>
          <Ionicons size={18} name={"heart-outline"} />
        </View>
      </View>
    </TouchableOpacity>)
  }

  const newsType = ({ index, item }: any) => {
    console.log();
    let isActive = item.key === type.type;
    return (
      <TouchableOpacity
        onPress={() => {
          setType({ type: item.key });
        }}
      >
        <View style={{ width: 65, height: 46, padding: 10, backgroundColor: isActive ? "#dfb" : '#cdedd4' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: isActive? 'tomato' : '#333', textAlign: 'center' }}>{item.title}</Text>
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
        <Text style={{ color: '#00b38a', fontSize: 22, marginTop: 20 }}>新闻正在加载中，请稍后...</Text>
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
    // paddingHorizontal: 10,
    fontSize: 18,
    width: (Dimensions.get("window").width) - 120,
    marginBottom: 20,
  },
  newsItem2Title: {
    fontSize: 18,
    width: (Dimensions.get("window").width),
    marginBottom: 20,
  },
  newsItem1Footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingHorizontal: 10,
  },
  newsItem1Meta: {
    fontSize: 13,
  },
  newsItem1Image: {
    width: Dimensions.get("window").width / 3,
    height: 80
  },
  newsItemContainer: {
    marginVertical: 10,
  },
  newsItemHeader: {
    fontSize: 18
  },
  newsItemImageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  newsItemImage: {
    width: Dimensions.get("window").width / 3,
    height: 80,
  }
});
