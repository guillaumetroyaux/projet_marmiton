import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/sceens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import RegisterScreen from "./src/sceens/RegisterScreen";
import AccueilScreen from "./src/sceens/AccueilScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreationArticleScreen from "./src/sceens/CreationArticleScreen";
import { UserProvider } from "./src/contexts/UserContexts"; // Importez le composant UserProvider depuis le fichier UserContext

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AccueilScreen" component={AccueilScreen} />
      <Tab.Screen
        name="CreationArticleScreen"
        component={CreationArticleScreen}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count + 1);
  };
  const deleteCount = () => {
    setCount(count - 1);
  };

  return (
    <UserProvider>
      {" "}
      {/* Enveloppez votre NavigationContainer avec le composant UserProvider */}
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen
            name="AccueilScreen"
            component={MyTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
