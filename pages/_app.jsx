/* eslint-disable react/prop-types */
import Head from 'next/head';
import Layout from '../app/components/Layout';
import SWRProvider from '../app/Providers/SWRProvider';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SWRProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SWRProvider>
  );
}

export default MyApp;
