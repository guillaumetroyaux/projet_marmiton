import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomButton = ({ onPress, title, navigation }) => {
  const handlePress = () => {
    if (onPress) {
      onPress(); // Appel de la fonction de soumission fournie
    }

    // Naviguer vers la page HomeScreen
    navigation.navigate("AccueilScreen");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    margin: 5,
    borderRadius: "10px",
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: "white",
  },
});

export default CustomButton;
