import React, { createContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const test = "hola";
  return (
    <AlertContext.Provider value={{ test }}>{children}</AlertContext.Provider>
  );
};

export default AlertContext;
