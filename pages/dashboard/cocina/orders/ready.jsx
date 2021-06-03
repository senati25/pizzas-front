import Head from 'next/head';
import OrderReadyWrapper from '../../../../app/components/Dashboard/Kitchen/OrderReady';

const ready = () => (
  <>
    <Head>
      <title>Inviaggio Dashboard | Cocina</title>
    </Head>
    <OrderReadyWrapper />
  </>
);

export default ready;
