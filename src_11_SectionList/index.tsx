import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
    
      ItemSeparatorComponent={() => /* 项目之间的分隔符 */<View style={{ borderBottomWidth: 1, borderBottomColor: "red" }}></View>}
      ListEmptyComponent={() => (/* 空数据的展示 */<Text>暂无数据</Text>)}
      // 下拉刷新
      refreshing={false}
      onRefresh={() => {
        alert('下拉刷新');
      }}
      // 上拉加载 0.1触发到底部还有0.1的时候加载
      onEndReachedThreshold={0.1}
      onEndReached={() => {
        alert('上拉加载');
      }}
      // 声明首部
      ListHeaderComponent={() => (<Text>三国应用榜单首部</Text>)}
      // 声明尾部
      ListFooterComponent={() => (<Text>三国应用榜单尾部</Text>)}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    // marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#d3ffc2",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

export default App;
