/*
 * @Date: 2023-11-16 10:33:17
 * @Description: description
 */
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
    title: 'Fourth Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f635',
    title: 'fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d726',
    title: 'sixth Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba7',
    title: 'seventh Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f638',
    title: 'eighth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d729',
    title: 'ninth Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba0',
    title: 'ninth-first Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6311',
    title: 'tenth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7212',
    title: 'eleventh Item',
  },
];
const Item = ({ title }: any) => {
  console.log(title, 59);
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
const renderItem = ({ item, index }: any) => {
  console.log(item, index, 67);
  return <Item title={item.title} />
};
const App = () => {
  const [selectId, setSelectId] = useState(null);
  return <SafeAreaView style={styles.container}>
    <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      /* 水平布局 */
      horizontal={false}
      initialScrollIndex={1} /* 初始滚动索引 */
      initialNumToRender={8}
      // numColumns={3} // 指定项，等高，但好像android并不支持这个属性
      inverted={false} // 列表反转
      extraData={selectId}
      ItemSeparatorComponent={() => /* 项目之间的分隔符 */<View style={{ borderBottomWidth: 1, borderBottomColor: "red" }}></View>}
      ListEmptyComponent={() => (/* 空数据的展示 */<Text>暂无数据</Text>)}
      // 下拉刷新
      // refreshing={false}
      // onRefresh={() => {
      //   alert('下拉刷新');
      // }}
      // // 上拉加载 0.1触发到底部还有0.1的时候加载
      // onEndReachedThreshold={0.1}
      // onEndReached={() => {
      //   alert('上拉加载');
      // }}
      // 声明首部
      ListHeaderComponent={() => (<Text>三国应用榜单首部1</Text>)}
      // 声明尾部
      ListFooterComponent={() => (<Text>三国应用榜单尾部2</Text>)}
    />
  </SafeAreaView>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
