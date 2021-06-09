import useDashboardContext from '../../../../hooks/useDashboardContext';
import ContentLayout from '../../../shared/ContentLayout';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';
import OrdersCardGrid from '../../../shared/OrdersCardGrid';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';

const ForConfirmation = () => {
  const {
    cocina: { ordersForConfirmation = [] },
    isLoading,
  } = useDashboardContext();

  if (isLoading) return <SpinnerDashboard />;

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Pendientes de confirmación" />

      <OrdersCardGrid orders={ordersForConfirmation} ruta="cocina" />
    </ContentLayout>
  );
};

export default ForConfirmation;
