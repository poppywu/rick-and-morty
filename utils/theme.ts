import { createContext } from "react";

export const ThemeContext = createContext({themeState:{},dispatch:(any: any)=>any});
export const themeReducer = (
  themeState: { color: string; backgroundColor: string },
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case "light":
      return { color: "black", backgroundColor: "white" };
    case "dark":
      return { color: "white", backgroundColor: "black" };
    default:
      return themeState;
  }
};