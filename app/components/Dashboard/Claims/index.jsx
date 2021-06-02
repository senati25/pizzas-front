import useDashboardContext from '../../../hooks/useDashboardContext';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import TableClaims from './TableClaims';
import ContentLayout from '../../shared/ContentLayout';
import HeaderPageDashboard from '../../shared/HeaderPageDashboard';

const Claims = () => {
  const dashboardContext = useDashboardContext();

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Reclamos" />
      {dashboardContext?.administrador?.claims ? (
        <>
          {dashboardContext?.administrador?.claims?.length === 0 ? (
            <div>Esta sección aun no cuenta con ningún registro</div>
          ) : (
            <TableClaims claims={dashboardContext?.administrador?.claims} />
          )}
        </>
      ) : (
        <SpinnerDashboard />
      )}
    </ContentLayout>
  );
};

export default Claims;
