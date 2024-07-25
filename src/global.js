import React, { createContext, useState } from "react";

// Create a Context
export const MyContext = createContext(null);

const MyProvider = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);


  return (
    <MyContext.Provider >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
