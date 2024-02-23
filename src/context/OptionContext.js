import React, { createContext, useContext, useState } from "react";

const OptionContext = createContext();

export const useOptions = () => useContext(OptionContext);

export const OptionProvider = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState(null);

  const updateSelectedOptions = (options) => {
    setSelectedOptions(options);
  };

  return (
    <OptionContext.Provider value={{ selectedOptions, updateSelectedOptions }}>
      {children}
    </OptionContext.Provider>
  );
};
