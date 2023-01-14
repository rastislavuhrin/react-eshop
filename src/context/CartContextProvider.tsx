import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
export const UserContext = React.createContext('light');
interface myType {
   cardItems: number[];
   //  setCardItems: React.Dispatch<React.SetStateAction<string>>;
   addToCard: (item: number[]) => void;
   removeFromCart: (item: number) => void;
}
export const CartContext = React.createContext({} as myType);

export const CartContextProvider = ({ children }: any) => {
   const [cardItems, setCardItems] = useLocalStorage(
      'cartItems',
      [] as number[]
   );
   const addToCard = (item: number[]) => {
      setCardItems([...cardItems, ...item]);
   };
   const removeFromCart = (itemToRemove: number) => {
      setCardItems(cardItems.filter((item) => item != itemToRemove));
   };
   const value = { cardItems, addToCard, removeFromCart };
   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
