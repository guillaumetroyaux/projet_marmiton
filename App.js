import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/sceens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import RegisterScreen from "./src/sceens/RegisterScreen";
import AccueilScreen from "./src/sceens/AccueilScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreationArticleScreen from "./src/sceens/CreationArticleScreen";
import { UserProvider } from "./src/contexts/UserContexts";
import Navigation from "./src/navigation/Routes";

export default function App() {
  return (
    <UserProvider>
      <Navigation></Navigation>
    </UserProvider>
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
