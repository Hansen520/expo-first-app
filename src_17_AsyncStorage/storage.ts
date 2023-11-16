import AsyncStorage from "@react-native-async-storage/async-storage";

class Storage {
  // 增
  static set(key: string, value: string) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }
  // 查
  static get(key: string, value: string) {
    return AsyncStorage.getItem(key)
      .then((value) => {
        if (value && value !== "") {
          const jsonValue = JSON.parse(value);
          return jsonValue;
        }
      })
      .catch(() => null);
  }
  // 更
  static update(key: string, newValue: string) {
    return AsyncStorage.getItem(key)
      .then((oldValue) => {
        newValue = typeof newValue === "string" ? newValue : Object.assign({}, oldValue, newValue);
        return AsyncStorage.setItem(key, JSON.stringify(newValue));
      })
      .catch(() => null);
  }
  // 删
  static delete(key: string) {
    return AsyncStorage.removeItem(key);
  }
  // 清
  static clear(key: string) {
    return AsyncStorage.clear();
  }
}

export default Storage;
