import useDashboardContext from '../../../hooks/useDashboardContext';
import ProductsTable from './ProductsTable';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import ContentLayout from '../../shared/ContentLayout';
import HeaderPageDashboard from '../../shared/HeaderPageDashboard';

const Products = () => {
  const dashboardContext = useDashboardContext();

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Productos" />
      {dashboardContext?.administrador?.products ? (
        <>
          <ProductsTable products={dashboardContext?.administrador?.products} />
        </>
      ) : (
        <SpinnerDashboard />
      )}
    </ContentLayout>
  );
};

export default Products;
