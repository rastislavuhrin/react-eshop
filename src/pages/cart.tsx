import React from 'react';
import { CartContext } from '../context/CartContextProvider';
const Product = () => {
   const { addToCard, cardItems, removeFromCart } =
      React.useContext(CartContext);
   return (
      <div className='flex flex-col'>
         {cardItems.map((item, index) => (
            <div className='flex' key={index}>
               {item}
            </div>
         ))}
      </div>
   );
};

export default Product;
