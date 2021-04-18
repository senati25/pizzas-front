/* eslint-disable react/prop-types */
import Head from 'next/head';
import Layout from '../app/components/Layout';
import ShoppingCartProvider from '../app/Providers/ShoppingCartProvider';
import StoreProvider from '../app/Providers/StoreProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { store } = pageProps;

  return (
    <StoreProvider initialState={store}>
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
    </StoreProvider>
  );
}

export default MyApp;
