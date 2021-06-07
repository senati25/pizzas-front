import { useRouter } from 'next/router';
import { useEffect } from 'react';
import HeaderPageDashboard from '../../../../shared/HeaderPageDashboard';
import ContentLayout from '../../../../shared/ContentLayout';
import useOrders from '../../../../../hooks/useOrders';
import SpinnerDashboard from '../../../../shared/SpinnerDashboard';
import OrderDetailsContent from '../../../../shared/OrderDetailsContent';
import useDashboardContext from '../../../../../hooks/useDashboardContext';

const OrderDetails = () => {
  const router = useRouter();
  const {
    cocina: { orderStatus = [] },
  } = useDashboardContext();
  const { getDetails, order, isLoading } = useOrders();

  useEffect(() => {
    if (router.query.id) {
      getDetails(router.query.id);
    }
  }, [router.query]);

  if (isLoading) return <SpinnerDashboard />;

  return (
    <ContentLayout>
      <HeaderPageDashboard title={`Pedido Nº ${order.id}: ${order.estado}`} />
      <OrderDetailsContent order={order} orderStatus={orderStatus} />
    </ContentLayout>
  );
};

export default OrderDetails;
