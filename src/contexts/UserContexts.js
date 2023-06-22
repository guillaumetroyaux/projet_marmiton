import React, { createContext, useState } from "react";

// Créez le contexte utilisateur
export const UserContext = createContext();

// Créez le composant fournisseur du contexte utilisateur
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username : "",
    role : ""
  });

  // Fonction pour définir l'utilisateur connecté
  const login = (userData) => {
    setUser(userData);
  };

  // Fonction pour déconnecter l'utilisateur
  const logout = () => {
    setUser(null);
  };

  // Valeur fournie par le contexte utilisateur
  const value = {
    user,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
