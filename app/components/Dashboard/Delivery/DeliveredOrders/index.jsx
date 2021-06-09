import useDashboardContext from '../../../../hooks/useDashboardContext';
import ContentLayout from '../../../shared/ContentLayout';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';
import OrdersCardGrid from '../../../shared/OrdersCardGrid';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';

const DeliveredOrders = () => {
  const {
    reparto: { deliveredOrders = [] },
    isLoading,
  } = useDashboardContext();

  if (isLoading) return <SpinnerDashboard />;

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Ordenes Entregadas" />

      <OrdersCardGrid orders={deliveredOrders} />
    </ContentLayout>
  );
};

export default DeliveredOrders;
