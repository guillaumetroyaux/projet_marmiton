import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CreationArticleScreen({ navigation }) {
  const [nom, setNom] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [loader, setLoader] = useState(false);
  const [showSecondForm, setShowSecondForm] = useState(false); // État pour contrôler l'affichage du second formulaire
  const user = getUser();

  const submitRecette = async () => {
    setLoader(true);
    console.log(nom);
    console.log(content);
    console.log(author);

    // Effectuez votre logique de soumission du formulaire de création de recette ici

    // Une fois que la soumission du formulaire de création de recette est terminée, affichez le second formulaire
    setShowSecondForm(true);

    setLoader(false);
  };

  const submitArticle = async () => {
    // Effectuez votre logique de soumission du formulaire de création d'article ici

    // Une fois que la soumission du formulaire de création d'article est terminée, vous pouvez prendre d'autres mesures, par exemple, naviguer vers une autre page
    navigation.navigate("AutreEcran");
  };

  return (
    <View style={styles.container}>
      <View style={styles.space}></View>
      {!showSecondForm ? ( // Affichez le formulaire de création de recette si showSecondForm est false
        <>
          <TextInput
            value={nom}
            style={styles.input}
            onChangeText={(text) => setNom(text)}
            placeholder="Nom de la recette"
          />
          <TextInput
            value={content}
            style={styles.input}
            onChangeText={(text) => setContent(text)}
            placeholder="Contenu"
          />
          <TextInput
            value={author}
            style={styles.input}
            onChangeText={(text) => setAuthor(text)}
            placeholder="Auteur"
          />
          <CustomButton
            text="Créer une recette"
            onPress={submitRecette}
            style={styles.button}
            textStyle={styles.buttonText}
            navigation={navigation}
          />
        </>
      ) : (
        // Affichez le formulaire de création d'article si showSecondForm est true
        <>
          <TextInput
          // Ajoutez ici les champs et les états pour le formulaire de création d'article
          />
          <CustomButton
            text="Créer un article"
            onPress={submitArticle}
            style={styles.button}
            textStyle={styles.buttonText}
            navigation={navigation}
          />
        </>
      )}
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
