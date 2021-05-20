import Head from 'next/head';
import OrdersWrapper from '../../../app/components/MyAccount/Orders';

const orders = () => (
  <>
    <Head>
      <title>Inviaggio Pizzeria | Mis ordenes</title>
    </Head>
    <OrdersWrapper />
  </>
);

export default orders;
