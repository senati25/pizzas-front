import useDashboardContext from '../../../hooks/useDashboardContext';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import TableClaims from './TableClaims';
import styles from './style.module.css';

const Claims = () => {
  const dashboardContext = useDashboardContext();

  return (
    <>
      {dashboardContext?.claims ? (
        <div className={styles.categories}>
          <h1 className={styles.categories__title}>Reclamos</h1>
          <TableClaims claims={dashboardContext?.claims} />
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default Claims;
