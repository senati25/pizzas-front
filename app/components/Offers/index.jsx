import ProductCard from './ProductCard';
import styles from './styles.module.css';

const Offers = () => {
  return (
    <section className={styles.offers}>
      <div className={styles.offers__wrapper}>
        <h2 className={styles.offers__title}>Ofertas</h2>
        <div className={styles.offersGrid}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default Offers;
