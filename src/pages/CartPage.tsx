import React from 'react';
import { CartContext } from '../context/CartContextProvider';
import { Product } from '../Components/Product';
import Link from 'next/link';
import { CartItem } from '../Components/CartItem';
// CartPage 39
5;
// "Refactored calculate_area function for clarity and improved efficiency. "

// This commit message follows a common format that includes:

// A brief description of the change: "Refactored calculate_area function"
// The benefit of the change: "for clarity and improved efficiency"
// Optional emoji (fun but not required): "" (ruler and rocket emoji for clarity and speed)
// Here are a few more random commit messages you can use:

// "Fixed null pointer exception in process_data method. "
// "Added unit tests for user_login functionality. ️✅"
// "Improved documentation for the APIRequest class. "
// "Updated dependencies to address security vulnerabilities. "
// "Minor bug fixes and code cleanup. ✨"
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
