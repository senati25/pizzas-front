import PropTypes from 'prop-types';
import useLoginDashboard from '../../../../hooks/useLoginDashboard';
import styles from './styles.module.css';

const Header = ({ className }) => {
  const { handleLogout } = useLoginDashboard();

  return (
    <header className={`${styles.dashboardHeader} ${className}`}>
      <button className={styles.logout} type="button" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </header>
  );
};

Header.defaultProps = { className: '' };

Header.propTypes = { className: PropTypes.string };

export default Header;
