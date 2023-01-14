import React, { useState } from 'react';
export const UserContext = React.createContext('light');
interface myType {
   cardItems: number[];
   //  setLanguage: React.Dispatch<React.SetStateAction<string>>;
   addToCard: (item: number[]) => void;
   removeFromCart: (item: number) => void;
}
export const CartContext = React.createContext({} as myType);

export const CartContextProvider = ({ children }: any) => {
   const [cardItems, setLanguage] = useState([] as number[]);
   const addToCard = (item: number[]) => {
      setLanguage([...cardItems, ...item]);
   };
   const removeFromCart = (itemToRemove: number) => {
      setLanguage(cardItems.filter((item) => item != itemToRemove));
   };
   const value = { cardItems, addToCard, removeFromCart };
   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
