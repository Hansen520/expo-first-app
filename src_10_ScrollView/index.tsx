/*
 * @Date: 2023-11-15 09:38:07
 * @Description: descriptio
 */
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform } from "react-native";

function Detail() {
  return (
    // SafeAreaView 是为了解决刘海屏遮挡的问题，在ios下会有
    <SafeAreaView style={{ marginTop: 80 }}>
      <ScrollView
        style={{ backgroundColor: '#dfb' }}
        horizontal
      >
        <Text style={styles.text}>
          时政新闻眼丨时隔六年再访美国，习近平抵达旧金山 2023-11-15 15:05:46来源：央视新闻客户端
        </Text>
      </ScrollView>
      <ScrollView
        style={[styles.scrollView]}
        contentContainerStyle={{ margin: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.text}>
          时政新闻眼丨时隔六年再访美国，习近平抵达旧金山 2023-11-15 15:05:46来源：央视新闻客户端
        </Text>
        <Text style={styles.text}>
          2021年11月，习主席在同美国总统拜登举行视频会晤时指出，“未来50年，国际关系中最重要的事情是中美必须找到正确的相处之道。”此次旧金山会晤能否推动中美关系稳下来、好起来，全世界密切关注。
          近年来，亚太发展面临的最大风险是个别国家蓄意在地区制造分裂、挑起对抗。亚太发展前景取决于今天的决断和行动。此次APEC会议的主题是“为所有人创建强韧和可持续的未来”。与会各方能否维护亚太合作正确方向，也值得拭目以待。
          function saveConfig Give the keyboard and the system information about the expected semantic meaning for the
          content that users enter. For iOS 11+ you can set textContentType to username or password to enable autofill
          of login details from the device keychain. For iOS 12+ newPassword can be used to indicate a new password
          input the user may want to save in the keychain, and oneTimeCode can be used to indicate that a field can be
          autofilled by a code arriving in an SMS. To disable autofill, set textContentType to none. Possible values for
          textContentType are: 文本框中的文字内容。 TextInput 是一个受约束的(Controlled)的组件，意味着如果提供了 value
          属性，原生值会被强制与 value
          属性保持一致。在大部分情况下这都工作的很好，不过有些情况下会导致一些闪烁现象——一个常见的原因就是通过不改变
          value 来阻止用户进行编辑。如果你希望阻止用户输入，可以考虑设置editable={false}
          ；如果你是希望限制输入的长度，可以考虑设置maxLength属性，这两个属性都不会导致闪烁。
        </Text>
        {/* 安卓下面会有文字遮挡的问题，所以加了下面的这一条内容 */}
        <View style={{ height: Platform.OS === 'ios' ? 0 : 30 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  scrollView: {
    backgroundColor: "#ccc",
    margin: 1,
  },
});

export default Detail;
