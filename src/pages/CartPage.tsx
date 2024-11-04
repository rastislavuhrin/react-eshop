import React from 'react';
import { CartContext } from '../context/CartContextProvider';
import { Product } from '../Components/Product';
import Link from 'next/link';
import { CartItem } from '../Components/CartItem';
// CartPage 47ggdddfffssfssssssssssss
// "Refactored calculatess_areass funsction for clsssssssssssarity and improved efficiency. "
// Thixxxs commit ssssssmessage fosssllows a common format that includes:
// Ass briefsss desssssssscription of the change: "Refactored cssalculate_area function"
// The benefit of sssthe chanssge: "forssss clarity and improved efficiency"
// Opssstional emojiaassssa (fun bussst not rsequired): "" (ruler and rocket emoji for clarity and speed)
// Here are a sssssssssssss morsssse random commit messages you can use:

// "Fixed null poddsssinter excep..tion in ssprocess_data method. "
// "Added unit tests for user_login sssssssssfunctiosssnality. ️✅"
// "Improved dogbbffffcumentationss for the APIRequest class. "
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
