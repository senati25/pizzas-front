/* eslint-disable react/prop-types */
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import ShopingCartProvider from '../app/Providers/ShoppingCartProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ShopingCartProvider>
      <ChakraProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </ShopingCartProvider>
  );
}

export default MyApp;
