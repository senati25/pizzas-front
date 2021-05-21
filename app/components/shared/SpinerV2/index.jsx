import styles from './styles.module.css';

const SpinnerV2 = () => (
  <div className={styles.spinner}>
    <div className={styles.lds__hourglass}></div>
  </div>
);

export default SpinnerV2;
