import Head from 'next/head';
import AssignedOrdersWrapper from '../../../../app/components/Dashboard/Delivery/AssignedOrders';

const assigned = () => (
  <>
    <Head>
      <title>Inviaggio Dashboard | Reparto</title>
    </Head>
    <AssignedOrdersWrapper />
  </>
);

export default assigned;
