import { createContext, useContext, useEffect, useState } from "react";
import i18n from "../i18n";

const AppContext = createContext();

export const AppProvider = ({ children }) => { 

  const [language, setLanguage] = useState(localStorage.getItem("language")?localStorage.getItem("language"):"ENG");

  const [loading, setLoading] = useState(false);
  const [showSplash,setShowSplash] = useState(false);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        loading,
        setLoading, 
        showSplash, 
        setShowSplash
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
