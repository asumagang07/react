import React from "react";
import { theme as defaultTheme } from "../themes";
export const ThemeContext = React.createContext({
  theme: defaultTheme,
});
export const ThemeProvider = ({ children, value }) =>
  React.createElement(ThemeContext.Provider, { value: value }, children);
