import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import fetcher from '../../../../../lib/fetcher';
import useSessionDashboardContext from '../../../../hooks/useSessionDashboardContext';
import styles from './styles.module.css';

const Header = ({ className }) => {
  const router = useRouter();
  const { mutateSession } = useSessionDashboardContext();

  return (
    <header className={`${styles.dashboardHeader} ${className}`}>
      <button
        className={styles.logout}
        type="button"
        onClick={async (e) => {
          e.preventDefault();
          mutateSession(
            await fetcher('/api/logout', { method: 'POST' }),
            false
          );
          router.push('/admin');
        }}
      >
        Cerrar Sesión
      </button>
    </header>
  );
};

Header.defaultProps = { className: '' };

Header.propTypes = { className: PropTypes.string };

export default Header;
