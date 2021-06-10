import { useRouter } from 'next/router';
import { useEffect } from 'react';
import HeaderPageDashboard from '../../../../shared/HeaderPageDashboard';
import ContentLayout from '../../../../shared/ContentLayout';
import useOrders from '../../../../../hooks/useOrders';
import SpinnerDashboard from '../../../../shared/SpinnerDashboard';
import OrderDetailsContent from '../../../../shared/OrderDetailsContent';
import useDashboardContext from '../../../../../hooks/useDashboardContext';

const nextStatusList = { 3: 5 };

const OrderDetails = () => {
  const router = useRouter();
  const {
    ventas: { orderStatus = [] },
  } = useDashboardContext();
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
        orderStatus={orderStatus}
        handleUpdateOrderStatus={() => {
          handleUpdateOrderStatus(nextStatus);
        }}
        nextStatus={!order.delivery && nextStatus}
      />
    </ContentLayout>
  );
};

export default OrderDetails;
