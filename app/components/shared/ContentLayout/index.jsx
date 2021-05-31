import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ContentLayout = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentLayout;
