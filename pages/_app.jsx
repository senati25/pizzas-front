/* eslint-disable react/prop-types */
import App from 'next/app';
import Head from 'next/head';
import ShopingCartProvider from '../app/Providers/ShoppingCartProvider';
import StoreProvider from '../app/Providers/StoreProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { store } = pageProps;

  return (
    <StoreProvider initialState={store}>
      <ShopingCartProvider>
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <Component {...pageProps} />
        </>
      </ShopingCartProvider>
    </StoreProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { ctx } = appContext;

  // console.log(ctx.req.cookies.store);
  return {
    pageProps: {
      ...appProps.pageProps,
      store: ctx.req?.cookies.store || '{}',
    },
  };
};

export default MyApp;
