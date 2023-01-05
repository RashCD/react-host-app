import React from "react";

export const ColorModeContext = React.createContext();

const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = React.useState("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const value = { mode, toggleColorMode };

  return (
    <ColorModeContext.Provider value={value}>
      {children(value)}
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
