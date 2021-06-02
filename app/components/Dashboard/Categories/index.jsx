import useDashboardContext from '../../../hooks/useDashboardContext';
import ContentLayout from '../../shared/ContentLayout';
import HeaderPageDashboard from '../../shared/HeaderPageDashboard';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import CategoryTable from './CategoryTable';

const Categories = () => {
  const dashboardContext = useDashboardContext();

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Categorias" />
      {dashboardContext?.administrador?.categories ? (
        <CategoryTable
          categories={dashboardContext?.administrador?.categories}
        />
      ) : (
        <SpinnerDashboard />
      )}
    </ContentLayout>
  );
};

export default Categories;
