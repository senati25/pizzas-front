import useDashboardContext from '../../../../hooks/useDashboardContext';
import ContentLayout from '../../../shared/ContentLayout';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';
import OrdersCardGrid from '../../../shared/OrdersCardGrid';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';

const AssignedOrders = () => {
  const {
    reparto: { assignedOrders = [] },
    isLoading,
  } = useDashboardContext();

  if (isLoading) return <SpinnerDashboard />;

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Ordenes Asignadas" />

      <OrdersCardGrid orders={assignedOrders} />
    </ContentLayout>
  );
};

export default AssignedOrders;
