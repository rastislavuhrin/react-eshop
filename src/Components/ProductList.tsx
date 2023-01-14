import React from 'react';
import { Product } from './Product';
const products = [
   {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc:
         'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt:
         'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
   },
   {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc:
         'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt:
         'Olive drab green insulated bottle with flared screw lid and flat top.',
   },
   {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc:
         'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt:
         'Person using a pen to cross a task off a productivity paper card.',
   },
   {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc:
         'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt:
         'Hand holding black machined steel mechanical pencil with brass tip and top.',
   },
   // More products...
];
export const ProductList = () => {
   return (
      <div className='bg-white'>
         <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <h2 className='sr-only'>Products</h2>

            <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
               {products.map((product) => (
                  <Product
                     key={product.id}
                     product={product}
                     //  href={product.href}
                     //  id={product.id}
                     //  imageAlt={product.imageAlt}
                     //  imageSrc={product.imageSrc}
                     //  name={product.name}
                     //  price={product.price}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};
