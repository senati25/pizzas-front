import Head from 'next/head';
import OrdersWrapper from '../../../../app/components/Dashboard/Ventas/Orders';

const orders = () => (
  <>
    <Head>
      <title>Inviaggio Dashboard | Ordenes</title>
    </Head>
    <OrdersWrapper />
  </>
);

export default orders;
