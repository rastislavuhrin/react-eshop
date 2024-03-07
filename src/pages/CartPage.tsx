import React from 'react';
import { CartContext } from '../context/CartContextProvider';
import { Product } from '../Components/Product';
import Link from 'next/link';
import { CartItem } from '../Components/CartItem';
// CartPage 11
const CartPage = () => {
   const { addToCard, cardItems, removeFromCart } =
      React.useContext(CartContext);
   return (
      <div className='flex flex-col'>
         <div className='h-52'>
            <div className='mt-10 ml-10'>
               <Link href='/'>
                  <button> HOME </button>
               </Link>
            </div>
         </div>
         <div className='flex '>
            <div className='w-72' />
            <div className='flex flex-col '>
               {cardItems.map((id, index) => (
                  <CartItem key={index} id={id} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default CartPage;
