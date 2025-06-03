import { createContext, ReactNode, useContext, useState } from "react";
import { ThemeName, themes } from "./themes";

// para evitar errores undefined

interface ThemeContextType {
  themeName: ThemeName; // nombre tema
  themeStyle: (typeof themes)[ThemeName]; // tipo tema
  setThemeName: (name: ThemeName) => void; // funcion para cambiar tema
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const MyThemeProvider = ({ children }: { children: ReactNode }) => {
  // para crear el contexto de tema
  //
  const [themeName, setThemeName] = useState<ThemeName>("interfazColor");

  const value: ThemeContextType = {
    //para asignar el valor del contextoTema
    themeName,
    themeStyle: themes[themeName],
    setThemeName,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  ); // aca
};

export const useTheme = () => {
  // hook para usar el conterto
  const context = useContext(ThemeContext);
  if (!context) throw new Error("no exsiste el ");
  return context;
};
