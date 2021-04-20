/* eslint-disable react/prop-types */
import Head from 'next/head';
import Layout from '../app/components/Layout';
import ShoppingCartProvider from '../app/Providers/ShoppingCartProvider';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ShoppingCartProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ShoppingCartProvider>
  );
}

export default MyApp;
