import Head from 'next/head';
import DeliveredOrdersWrapper from '../../../../app/components/Dashboard/Delivery/DeliveredOrders';

const delivered = () => (
  <>
    <Head>
      <title>Inviaggio Dashboard | Reparto</title>
    </Head>
    <DeliveredOrdersWrapper />
  </>
);

export default delivered;
