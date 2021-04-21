import useDashboardContext from '../../../hooks/useDashboardContext';
import SpinnerDashboard from '../../shared/SpinnerDashboard';

import useReclamo from '../../../hooks/useReclamo';
import styles from './style.module.css';
import TableClaims from './TableClaims';

const Claims = () => {
  const { claims } = useDashboardContext();
  const { handleDeleteClaim } = useReclamo();
  return (
    <>
      {claims ? (
        <div className={styles.categories}>
          <h1 className={styles.categories__title}>Categorias</h1>
          <TableClaims claims={claims} handleDeleteClaim={handleDeleteClaim} />
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default Claims;
