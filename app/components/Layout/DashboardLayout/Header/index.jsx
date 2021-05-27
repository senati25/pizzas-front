import PropTypes from 'prop-types';
import useLoginDashboard from '../../../../hooks/useLoginDashboard';
import styles from './styles.module.css';

const Header = ({ className, setSideMenuOpen }) => {
  const { handleLogout } = useLoginDashboard();

  return (
    <header className={`${styles.dashboardHeader} ${className}`}>
      <button type="button" onClick={() => setSideMenuOpen(true)}>
        <i className="fas fa-times"></i>
      </button>
      <button className={styles.logout} type="button" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </header>
  );
};

Header.defaultProps = { className: '' };

Header.propTypes = {
  className: PropTypes.string,
  setSideMenuOpen: PropTypes.func.isRequired,
};

export default Header;
