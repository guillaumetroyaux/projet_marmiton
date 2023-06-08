import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const submit = async () => {
    setLoader(true);
    //effectuer une action de connexion avec les identifiants de l'utilisateur
    console.log(username);
    console.log(password);

    fetch("https://b336-79-174-199-126.ngrok-free.app/register", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("Erreur lors de la requête :", error);
      });
    setLoader(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.space}></View>
      <TextInput
        value={username}
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        placeholder="Nom d'utilisateur"
      />
      <TextInput
        value={password}
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder="Mot de passe"
      />
      <CustomButton
        text="Connectez-vous"
        onPress={submit}
        style={styles.button}
        textStyle={styles.buttonText}
        navigation={navigation}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("LoginScreen")}
        style={styles.centrer}
      >
        <Text>Vous avez un compte ? Se connecter</Text>
      </TouchableOpacity>
      <View style={styles.space}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  input: {
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "black",
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  space: {
    flex: 1,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: "white",
  },
  centrer: {
    alignItems: "center",
  },
});
