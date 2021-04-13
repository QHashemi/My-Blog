import React, { useState, useContext } from "react";

const AppContext = React.createContext();
const ContextProvider = ({ children }) => {
  return <AppContext.Provider value="HELLO">{children}</AppContext.Provider>;
};

export const useGlobalContext =()=>{
	return useContext(AppContext);
}

export { AppContext, ContextProvider };
