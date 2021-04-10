import styles from './styles.module.css';

const SpinnerDashboard = () => (
  <div className={styles.spinner}>
    <div className={styles.double_bounce1}></div>
    <div className={styles.double_bounce2}></div>
  </div>
);

export default SpinnerDashboard;
