/* eslint-disable react/prop-types */
import Head from 'next/head';
import ShopingCartProvider from '../app/Providers/ShoppingCartProvider';
import StoreProvider from '../app/Providers/StoreProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ShopingCartProvider>
      <StoreProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </StoreProvider>
    </ShopingCartProvider>
  );
}

export default MyApp;
