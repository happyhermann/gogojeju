import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../assets/img/sungsan.jpeg")}
        resizeMode="cover"
      >
        <View style={styles.textBox}>
          <Text style={styles.text}>가보지 못한 제주의 여행지</Text>
          <Text style={styles.text}>고고 제주.</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 27,
    fontWeight: "800",
    color: "white",
  },
});
