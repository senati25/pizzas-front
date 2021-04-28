import Image from 'next/image';
import styles from './styles.module.css';

const Spinner = () => (
  <div className={styles.spinner}>
    <Image
      alt="food"
      src="/images/pizza.gif"
      width={200}
      height={200}
      layout="responsive"
    />
  </div>
);

export default Spinner;
