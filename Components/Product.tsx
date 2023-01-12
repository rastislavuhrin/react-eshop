import React from 'react';
import Image from 'next/image';

interface Props {
   product: Product;
}

interface Product {
   id: number;
   href: string;
   imageSrc: string;
   imageAlt: string;
   name: string;
   price: string;
}
export const Product = (productWrapper: Props) => {
   const { product } = productWrapper;
   return (
      <a href={product.href} className='group'>
         <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
            <Image
               src={product.imageSrc}
               alt={product.imageAlt}
               className='h-full w-full object-cover object-center group-hover:opacity-75'
               width={500}
               height={500}
            />
         </div>
         <div className='mt-4 flex justify-between  '>
            <div className=''>
               <h3 className='text-sm text-gray-700'>{product.name}</h3>
               <p className='mt-1 text-lg font-medium text-gray-900'>
                  {product.price}
               </p>
            </div>
            <div className='self-center'>BUY</div>
         </div>
      </a>
   );
};
