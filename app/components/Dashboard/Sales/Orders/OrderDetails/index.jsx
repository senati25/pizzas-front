import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import HeaderPageDashboard from '../../../../shared/HeaderPageDashboard';
import ContentLayout from '../../../../shared/ContentLayout';
import useOrders from '../../../../../hooks/useOrders';
import OrderDetailsTable from '../../../../shared/OrderDetailsTable';
import SpinnerDashboard from '../../../../shared/SpinnerDashboard';
import styles from './styles.module.css';

const OrderDetails = () => {
  const router = useRouter();
  const { getDetails, order, isLoading } = useOrders();

  useEffect(() => {
    getDetails(router.query.id);
  }, [router.query]);

  if (isLoading) return <SpinnerDashboard />;

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Details" />

      <div className={styles.content}>
        <OrderDetailsTable order={order} />

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
    </ContentLayout>
  );
};

export default OrderDetails;
