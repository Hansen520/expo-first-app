/*
 * @Date: 2023-11-17 14:06:30
 * @Description: description
 */
import { Camera, CameraType } from "expo-camera";
import React, { useState, useEffect, useRef } from "react";
import { TouchableOpacity, Text, View, StyleSheet, Dimensions, Image } from "react-native";

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState<{ uri: string }>({ uri: '' });
  const cameraRef: any = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const res = await cameraRef.current.takePictureAsync({ onPictureSaved: onPictureSaved, quality: 1, base64: true });
    }
  };

  const onPictureSaved = (photo: any) => {
    console.log(Object.keys(photo), 34);
    setPhoto(photo);
  };

  const clear = () => {
    setPhoto({});
  }



  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(r) => {
          cameraRef.current = r;
        }}
      >
        <View style={styles.buttonContainer}>
          <View style={styles.flip}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
              }}
            >
              <Text style={styles.text}> 翻转 </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.clear}>
            <TouchableOpacity style={styles.button} onPress={clear}>
              <Text style={styles.text}> 清空 </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Shot}>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}> 快照 </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
      {photo.uri && <Image
        style={styles.img}
        source={{
          uri: photo.uri,
        }}
      />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3ba'
  },
  img: {
    width: 200,
    height: 300,
    borderWidth: 1,
    borderColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0
  },
  camera: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / (3 / 4),
    justifyContent: "flex-end",
  },
  clear: {},
  flip: {
  },
  Shot: {
    
  },
  button: {},
  buttonContainer: {
    borderColor: 'red',
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 25,
    color: "white",
  },
});

export default CameraScreen;
