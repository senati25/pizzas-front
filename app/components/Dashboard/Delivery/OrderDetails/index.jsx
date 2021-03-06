import { useRouter } from 'next/router';
import { useEffect } from 'react';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';
import ContentLayout from '../../../shared/ContentLayout';
import useOrders from '../../../../hooks/useOrders';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';
import OrderDetailsContent from '../../../shared/OrderDetailsContent';
import useDashboardContext from '../../../../hooks/useDashboardContext';

const nextStatusList = { 3: 4, 4: 5 };

const OrderDetails = () => {
  const router = useRouter();
  const {
    reparto: { orderStatus = [] },
  } = useDashboardContext();

  const {
    getDetails,
    order,
    isLoading,
    handleUpdateOrderStatus,
    assignDealer,
  } = useOrders();

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
        handleUpdateOrderStatus={async () => {
          if (order.estado_pedido_id === 3) await assignDealer();
          handleUpdateOrderStatus(nextStatus);
        }}
        // assignDealer={assignDealer}
        orderStatus={orderStatus}
        nextStatus={nextStatus}
      />
    </ContentLayout>
  );
};

export default OrderDetails;
