import PropTypes from 'prop-types';
import styles from './styles.module.css';

const SideMenu = ({ className }) => (
  <div className={`${styles.sideMenu} ${className}`}>
    <button type="button" style={{ backgroundColor: 'red' }}>
      a
    </button>
  </div>
);

SideMenu.defaultProps = { className: '' };

SideMenu.propTypes = { className: PropTypes.string };

export default SideMenu;
