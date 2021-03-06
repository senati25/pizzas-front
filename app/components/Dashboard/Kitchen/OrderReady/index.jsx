import useDashboardContext from '../../../../hooks/useDashboardContext';
import ContentLayout from '../../../shared/ContentLayout';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';
import OrdersCardGrid from '../../../shared/OrdersCardGrid';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';

const OrderReady = () => {
  const {
    cocina: { ordersReady = [] },
    isLoading,
  } = useDashboardContext();

  if (isLoading) return <SpinnerDashboard />;

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Ordenes Preparadas" />

      <OrdersCardGrid orders={ordersReady} ruta="cocina" />
    </ContentLayout>
  );
};

export default OrderReady;
