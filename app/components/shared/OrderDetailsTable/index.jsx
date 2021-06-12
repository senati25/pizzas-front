import PropTypes from 'prop-types';
import Image from 'next/image';
import { Fragment } from 'react';
import styles from './styles.module.css';

const OrderDetailsTable = ({ order }) => (
  <div className={styles.grid}>
    <span className={styles.grid__header}>Item</span>
    <span className={styles.grid__header}>Cantidad</span>
    <span className={styles.grid__header}>Precio</span>
    <span className={styles.grid__header}>Subtotal</span>
    {order?.detalles?.length > 0 &&
      order.detalles.map((detalle) => (
        <Fragment key={detalle.id}>
          <span className={styles.item__info}>
            <span className={styles.item__img}>
              <Image
                src={detalle.img}
                width={50}
                height={50}
                layout="responsive"
                objectFit="cover"
              />
            </span>
            <span>
              <h3>{detalle.nombre}</h3>
              <strong>{detalle.variedad.toUpperCase()}</strong>
            </span>
          </span>
          <span>{detalle.cantidad}</span>
          <span>{detalle.precio_unidad}</span>
          <span className={styles.subtotal}>
            {parseFloat(detalle.precio_unidad * detalle.cantidad).toFixed(2)}
          </span>
        </Fragment>
      ))}
    <span className={styles.grid__footer}></span>
    <span className={styles.grid__footer}></span>
    <span className={styles.grid__footer}>Subtotal</span>
    <span className={`${styles.grid__footer} ${styles.total}`}>
      S/.{parseFloat(order.subtotal).toFixed(2)}
    </span>
    <span className={styles.grid__footer}></span>
    <span className={styles.grid__footer}></span>
    <span className={styles.grid__footer}>IGV</span>
    <span className={`${styles.grid__footer} ${styles.total}`}>
      S/.{parseFloat(order.igv).toFixed(2)}
    </span>
    <span className={styles.grid__footer}></span>
    <span className={styles.grid__footer}></span>
    <span className={styles.grid__footer}>Total</span>
    <span className={`${styles.grid__footer} ${styles.total}`}>
      S/.{parseFloat(order.total).toFixed(2)}
    </span>
  </div>
);

OrderDetailsTable.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    fecha: PropTypes.string.isRequired,
    mensaje: PropTypes.string,
    tipo: PropTypes.string.isRequired,
    estado_pedido_id: PropTypes.number.isRequired,
    detalles: PropTypes.oneOfType([PropTypes.array.isRequired]).isRequired,
    total: PropTypes.number.isRequired,
    subtotal: PropTypes.number.isRequired,
    igv: PropTypes.number.isRequired,
  }).isRequired,
};
export default OrderDetailsTable;
