import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import OrderDetailsTable from '../../shared/OrderDetailsTable';
import Spinner from '../../shared/Spinner';
import Container from '../Container';
import styles from './styles.module.css';

const OrderDetails = () => {
  const router = useRouter();
  const [order, setOrder] = useState(null);
  useEffect(() => {
    if (router?.query?.order) {
      setOrder(JSON.parse(router.query.order));
    }
  }, [router.query]);

  if (!order) return <Spinner />;

  return (
    <Container title={`Pedido No. ${order.id}  |  ${order.fecha}`}>
      <div className={styles.wrapper}>
        <h2 className={styles.status}>
          Estado: {order.estado_pedido_denominacion}
        </h2>

        {order && <div>{order.mensaje}</div>}

        <OrderDetailsTable order={order} />
      </div>
    </Container>
  );
};

export default OrderDetails;
