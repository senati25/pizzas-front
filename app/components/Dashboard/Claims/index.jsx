import { useRouter } from 'next/router';
import useDashboardContext from '../../../hooks/useDashboardContext';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import TableClaims from './TableClaims';
import styles from './style.module.css';

const Claims = () => {
  const dashboardContext = useDashboardContext();

  const router = useRouter();

  if (dashboardContext?.claims?.length === 0)
    return <div>Esta sección aun no cuenta con ningún registro</div>;
  console.log(router);
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
