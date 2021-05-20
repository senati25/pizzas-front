import { useRouter } from 'next/router';
import useOrdersContext from '../../../hooks/useOrdersContext';
import Container from '../Container';
import styles from './styles.module.css';

const Orders = () => {
  const router = useRouter();
  const { orders } = useOrdersContext();
  return (
    <Container title="Mis ordenes">
      <ul className={styles.grid}>
        {orders.length > 0 &&
          orders?.map((order) => (
            <li className={styles.grid__item} key={order.id}>
              <span>
                <strong>Pedido No.</strong> {order.id}
              </span>
              <span>
                <strong>Fecha:</strong> {order.fecha}
              </span>
              <span>
                <strong>Total:</strong> S/ {parseFloat(order.total).toFixed(2)}
              </span>
              <span>
                <strong>Estado:</strong> {order.estado_pedido_id}
              </span>
              <button
                type="button"
                onClick={() => router.push(`/account/orders/${order.id}`)}
              >
                Ver detalles
              </button>
            </li>
          ))}
      </ul>
    </Container>
  );
};

export default Orders;
