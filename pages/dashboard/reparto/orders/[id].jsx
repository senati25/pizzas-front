import Head from 'next/head';
import OrderDetails from '../../../../app/components/Dashboard/Delivery/OrderDetails';

const orderDetails = () => (
  <>
    <Head>
      <title>Inviaggio Dashboard | Ordenes </title>
    </Head>
    <OrderDetails />
  </>
);

export default orderDetails;
