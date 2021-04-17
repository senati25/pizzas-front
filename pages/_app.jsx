/* eslint-disable react/prop-types */
import Head from 'next/head';
import StoreProvider from '../app/Providers/StoreProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { store } = pageProps;

  return (
    <StoreProvider initialState={store}>
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </>
    </StoreProvider>
  );
}

export default MyApp;
