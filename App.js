import { NavigationContainer } from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import MainScreen from "./screens/MainScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createNativeStackNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route);
  console.log(routeName);
  return routeName;
}
// 머터리얼 하단 탭 내비게이터 + 헤더 타이틀 동기화

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={({ route }) => ({
            title: getHeaderTitle(route),
          })}
        />

        {/* 내비게이션의 상태가 바뀔 때 마다 함수를 다시 실행하여 
        화면의 options 객체를 생성 */}
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
