import Image from 'next/image';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';

import Products from '../data/products.json';
interface Props {
   id: number;
}
export const CartItem = ({ id }: Props) => {
   const cartItems = useContext(CartContext);
   const product = Products.find((item) => item.id == id);
   return (
      <div className='flex w-96 h-10 bg-slate-400'>
         <div className='flex justify-between flex-1 items-center'>
            <div className='flex items-center'>
               {product && (
                  <div className='rounded-lg bg-gray-200 '>
                     <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className=' object-cover m-0 object-center group-hover:opacity-75'
                        width={50}
                        height={50}
                     />
                  </div>
               )}
               <div className='flex flex-1'>{product?.name}</div>
            </div>
            <div className='flex gap-3'>
               <div className=''>{product?.price}</div>
               <button onClick={() => cartItems.removeFromCart(id)}>
                  vymaz
               </button>
            </div>
         </div>
      </div>
   );
};
