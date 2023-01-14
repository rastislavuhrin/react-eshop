import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import { CartContextProvider } from '../context/CartContextProvider';

export default function App({ Component, pageProps }: AppProps) {
   return (
      <CartContextProvider>
         <Component {...pageProps} />
      </CartContextProvider>
   );
}
