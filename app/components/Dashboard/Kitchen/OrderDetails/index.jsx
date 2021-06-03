import { useRouter } from 'next/router';
import { useEffect } from 'react';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';
import ContentLayout from '../../../shared/ContentLayout';
import useOrders from '../../../../hooks/useOrders';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';
import OrderDetailsContent from '../../../shared/OrderDetailsContent';

const nextStatusList = { 1: 2, 2: 3 };

const OrderDetails = () => {
  const router = useRouter();
  const { getDetails, order, isLoading, handleUpdateOrderStatus } = useOrders();
  const nextStatus = nextStatusList[order.estado_pedido_id];
  useEffect(() => {
    if (router.query.id) {
      getDetails(router.query.id);
    }
  }, [router.query]);

  if (isLoading) return <SpinnerDashboard />;

  return (
    <ContentLayout>
      <HeaderPageDashboard title={`Pedido Nº ${order.id}: ${order.estado}`} />
      <OrderDetailsContent
        order={order}
        handleUpdateOrderStatus={() => {
          handleUpdateOrderStatus(nextStatus);
        }}
        nextStatus={nextStatus}
      />
    </ContentLayout>
  );
};

export default OrderDetails;
