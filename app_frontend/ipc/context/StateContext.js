import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showResult, setShowResult] = useState(false);
  const [ipcCode,setIpcCode] = useState("")
  const [ipcSummary,setIpcSummary] = useState('')
  return (
    <Context.Provider
      value={{
        showResult,
        setShowResult,
        ipcCode,
        setIpcCode,
        ipcSummary,
        setIpcSummary

      }}
    >
      {children}
    </Context.Provider>
  );
};

export const UseStateContext = () => useContext(Context);
