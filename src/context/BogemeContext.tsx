import React from "react";

interface BogemeContextType {
  isBogeme: boolean;
  setBogeme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BogemeContext = React.createContext<BogemeContextType>({
  isBogeme: false,
  setBogeme: () => {},
});
