import PropTypes from 'prop-types';
import styles from './styles.module.css';

const HeaderPageDashboard = ({ children, title }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{title}</h1>
    {children}
  </header>
);

HeaderPageDashboard.defaultProps = {
  children: null,
};

HeaderPageDashboard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default HeaderPageDashboard;
