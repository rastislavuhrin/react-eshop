import React from 'react';
import { CartContext } from '../context/CartContextProvider';
import { Product } from '../Components/Product';
import Link from 'next/link';
import { CartItem } from '../Components/CartItem';
// CartPage
// "Refactored calcuddlatess_areassss funsction for  and improved efficiency. "
// Thissssssss commssit  fosssllows a common format that includes:
// Ass briefsss  of the change: "Refactored cssalculate_area function"
// The benefit of  csshanssge: "forssss clarity and improved efficiency"
// Opssstional  (fun ssr not rsequired): "" (ruler and rocket emoji for clarity and speed)
// Here are a  sss random  msessages you can use:ss

// "Fixed null poddsssinter  i
// "Added unit tets for user_lgin . ️✅"
// "Improved sss for the APIRequest class. "
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
