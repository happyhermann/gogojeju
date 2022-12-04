import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text, Button, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import FoodScreen from "./FoodScreen";
import SearchScreen from "./SearchScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createMaterialBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showIcon: true,
      }}
    >
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={24} />
          ),
          tabBarColor: "black",
        }}
      />
      <Tab.Screen
        name="검색"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" color={color} size={24} />
          ),
          tabBarColor: "gray",
        }}
      />
      <Tab.Screen
        name="맛집"
        component={FoodScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="food-bank" color={color} size={24} />
          ),
          tabBarColor: "green",
        }}
      />
      <Tab.Screen
        name="프로필"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="emoji-people" color={color} size={24} />
          ),
          tabBarColor: "blue",
        }}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;
