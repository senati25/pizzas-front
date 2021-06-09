import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

const OrdersCardGrid = ({ orders, ruta }) => {
  const router = useRouter();

  return (
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
              <strong>Estado:</strong> {order.estado}
            </span>
            <button
              type="button"
              onClick={() => {
                router.push(`/dashboard/${ruta}/orders/${order.id}`);
              }}
            >
              Ver detalles
            </button>
          </li>
        ))}
    </ul>
  );
};

OrdersCardGrid.propTypes = {
  orders: PropTypes.oneOfType([PropTypes.array.isRequired]).isRequired,
  ruta: PropTypes.string.isRequired,
};

export default OrdersCardGrid;
