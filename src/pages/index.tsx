import Head from 'next/head';
import { ProductList } from '../Components/ProductList';
import Link from 'next/link';

export default function Home() {
   return (
      <>
         <Head>
            <title>React ehop</title>
            <meta name='description' content='Generated by create next app' />
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1'
            />
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <main className='flex justify-between'>
            <ProductList />
            <Link href='/CartPage' className='text-xl'>
               CART
            </Link>
         </main>
      </>
   );
}
