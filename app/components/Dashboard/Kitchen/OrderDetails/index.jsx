import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';
import ContentLayout from '../../../shared/ContentLayout';
import useOrders from '../../../../hooks/useOrders';
import OrderDetailsTable from '../../../shared/OrderDetailsTable';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';
import styles from './styles.module.css';

const OrderDetails = () => {
  const router = useRouter();
  const { getDetails, order, isLoading } = useOrders();

  const details = {
    fecha: order.fecha,
    tipo: order.tipo,
    total: order.total,
    mensaje: order.mensaje,
  };

  useEffect(() => {
    if (router.query.id) {
      getDetails(router.query.id);
    }
  }, [router.query]);

  if (isLoading) return <SpinnerDashboard />;

  return (
    <ContentLayout>
      <HeaderPageDashboard title={`Pedido Nº ${order.id}`} />

      <div className={styles.content}>
        <OrderDetailsTable order={order} />

        <div className={styles.order__info}>
          <div>
            <h2 className={styles.info__title}>
              Detalles <hr />
            </h2>

            <div className={styles.formValues__content}>
              {Object.keys(details).map((key) => (
                <Fragment key={key}>
                  {details[key] && (
                    <>
                      <span className={styles.formValues__key}>
                        {key.charAt(0).toUpperCase() + key.substring(1)}:
                      </span>

                      <span>{details[key]}</span>
                    </>
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          <div>
            <h2 className={styles.info__title}>
              Datos Cliente <hr />
            </h2>
            <div className={styles.formValues__content}>
              {Object.keys(order.cliente).map((key) => (
                <Fragment key={key}>
                  <span className={styles.formValues__key}>
                    {key.charAt(0).toUpperCase() + key.substring(1)}:{' '}
                  </span>

                  <span>{order.cliente[key]}</span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default OrderDetails;
