import PropTypes from 'prop-types';
import CardUserProfile from '../CardUserProfile';
import DashboardNav from '../DashboardNav';
import styles from './styles.module.css';

const SideMenu = ({ className }) => (
  <div className={`${styles.sideMenu} ${className}`}>
    <CardUserProfile />
    <DashboardNav />
  </div>
);

SideMenu.defaultProps = { className: '' };

SideMenu.propTypes = { className: PropTypes.string };

export default SideMenu;
