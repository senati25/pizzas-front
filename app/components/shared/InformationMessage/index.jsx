import PropTypes from 'prop-types';
import styles from './styles.module.css';

const InformationMessage = ({ messageText }) => (
  <div className={styles.infoMessage}>
    <i className="fas fa-info-circle fa-3x"></i>
    {messageText}
  </div>
);

InformationMessage.propTypes = {
  messageText: PropTypes.string.isRequired,
};

export default InformationMessage;
