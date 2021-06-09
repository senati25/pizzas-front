import useDashboardContext from '../../../../hooks/useDashboardContext';
import ContentLayout from '../../../shared/ContentLayout';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';
import OrdersCardGrid from '../../../shared/OrdersCardGrid';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';

const ForPreparation = () => {
  const {
    cocina: { ordersForPreparation = [] },
    isLoading,
  } = useDashboardContext();

  if (isLoading) return <SpinnerDashboard />;

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Ordenes aprobadas" />

      <OrdersCardGrid orders={ordersForPreparation} ruta="cocina" />
    </ContentLayout>
  );
};

export default ForPreparation;
