/* eslint-disable react/prop-types */
import App from 'next/app';
import Head from 'next/head';
import StoreProvider from '../app/Providers/StoreProvider';
import '../styles/globals.css';

const isServer = () => typeof window === 'undefined';
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

// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   const { ctx } = appContext;

//   // console.log(ctx.req.cookies.store);
//   return {
//     pageProps: {
//       ...appProps.pageProps,
//       store: ctx.req?.cookies.store || '{}',
//     },
//   };
// };

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  if (isServer()) {
    return {
      pageProps: {
        ...appProps.pageProps,
        store: appContext.ctx.req.headers.cookie?.store || '{}',
      },
    };
  }

  return {
    pageProps: {
      ...appProps.pageProps,
      store: '{}',
    },
  };
};
export default MyApp;
