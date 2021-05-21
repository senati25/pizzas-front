import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import Container from '../Container';
import styles from './styles.module.css';

const OrderDetails = () => {
  const router = useRouter();
  const [order, setOrder] = useState([]);
  useEffect(() => {
    if (router?.query?.order) {
      setOrder(JSON.parse(router.query.order));
    }
  }, [router.query]);

  return (
    <Container title={`Pedido No. ${order.id}  |  ${order.fecha}`}>
      <div className={styles.wrapper}>
        <h2 className={styles.status}>
          Estado: {order.estado_pedido_denominacion}
        </h2>

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
                  {parseFloat(detalle.precio_unidad * detalle.cantidad).toFixed(
                    2
                  )}
                </span>
              </Fragment>
            ))}
          <span className={styles.grid__footer}></span>
          <span className={styles.grid__footer}></span>
          <span className={styles.grid__footer}>Total</span>
          <span className={`${styles.grid__footer} ${styles.total}`}>
            S/.{parseFloat(order.total).toFixed(2)}
          </span>
        </div>
      </div>
    </Container>
  );
};

export default OrderDetails;
