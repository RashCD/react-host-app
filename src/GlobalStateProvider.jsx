import React, { useState } from "react";

export const GlobalStateContext = React.createContext();

const GlobalStateProvider = ({ children }) => {
  const [globalCount, setGlobalCount] = useState(0);

  const toggleIncrement = () => {
    setGlobalCount((prev) => prev + 1);
  };

  const toggleDecrement = () => {
    setGlobalCount((prev) => prev - 1);
  };

  const value = { globalCount, toggleIncrement, toggleDecrement };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
