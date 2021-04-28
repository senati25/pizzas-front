/* eslint-disable react/prop-types */
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import Layout from '../app/components/Layout';
import SWRProvider from '../app/Providers/SWRProvider';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer style={{ marginTop: '5rem' }} />
      </Layout>
    </SWRProvider>
  );
}

export default MyApp;
