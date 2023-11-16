/*
 * @Date: 2023-11-16 11:16:33
 * @Description: description
 */
import React, { useRef, useState } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import { Picker } from "@react-native-picker/picker";

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('java');
  const pickerRef: any = useRef();

  return (
    <View>
      <Picker
        style={{ width: 160, height: 50 }}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        mode="dropdown"
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <Text>1</Text>
    </View>
  );
};

export default App;
