import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";

import Modall from "./Modall";

import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import * as Location from "expo-location";
import axios from "axios";

const SCREEN_WIDTH = Dimensions.get("window").width;
console.log(SCREEN_WIDTH);

const API_KEY = "507bb2d634489f66dba51c266919295f";

const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Atmosphere: "cloudy-gusts",
  Snow: "snow",
  Rain: "rains",
  Drizzle: "rain",
  Thunderstorm: "lightning",
};

export default function HomeScreen() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);

  const [isOpen, setOpen] = useState(false);

  // 모달창 여는 state

  useEffect(() => {
    setOpen(true);
  }, []);

  // 렌더링 될 때 딱 한번만 setOpen 해주기

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    4;
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    console.log(location);
    setCity(location[0].city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDays(json.daily);
  };
  useEffect(() => {
    getWeather();
  }, []);

  // function 앞 async를 붙이면 함수는 항상 프라미스 반환
  // await는 async 함수안에서만 동작
  // 자바스크립트는 await를 만나면 프라미스가 처리될 때 까지 기다림
  // await를 사용하면 대기처리를 해주기 때문에 promise의 then/catch가 필요하지 않음

  return (
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../assets/img/sungsan.jpeg")}
      resizeMode="cover"
    >
      <View>
        {/* <Text>님, 안녕하세요!</Text> */}
        <Text style={styles.cityName}>{city}</Text>
      </View>
      {/* 
      <View style={styles.textBox}>
        <Text style={styles.text}>가보지 못한 제주의 여행지</Text>
        <Text style={styles.text}>고고 제주.</Text>
      </View> */}

      {isOpen && <Modall />}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  textBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "800",
    color: "white",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 20,
    fontWeight: "500",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontWeight: "600",
    fontSize: 130,
  },
  description: {
    marginTop: -10,
    fontSize: 50,
  },
  tinyText: {
    fontSize: 20,
  },
});
