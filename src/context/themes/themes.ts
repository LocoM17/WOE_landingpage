// themes.ts
export const themes = {
  // tema
  interfazColor: {
    bg_general1: "#18181C",
    bg_general2: "#121214",
    bg_general3: "#000000",
    Cl_titulo1: "#ffae00",
    Cl_titulo2: "#58ADCD",
    Cl_titulo3: "#ffffff",
    Cl_titulo4: "#0082b1ff",
    Cl_textDescriotion1: "#ffffff",
    Cl_textDescriotion2: "#718096",
    BG_degradados: {
      degr0: "#000000",
      degr1: "rgba(0, 0, 0, 0.62)",
      degr2: "rgba(0, 0, 0, 0.87)",
      degr3: "#000000",
    },
  },
};

export type ThemeName = keyof typeof themes; // keyof --
// typeof
