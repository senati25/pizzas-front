import styles from './styles.module.css';

const Spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.lds__hourglass}></div>
  </div>
);

export default Spinner;
