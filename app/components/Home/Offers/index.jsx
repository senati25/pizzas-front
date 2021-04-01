import products from '../../../helpers/products';
import useShoppingCart from '../../../hooks/useShoppingCart';
import ProductCard from '../ProductCard';

import styles from './styles.module.css';

const Offers = () => {
  const { addProduct } = useShoppingCart();
  return (
    <section className={styles.offers}>
      <div className={styles.offers__wrapper}>
        <h2 className={styles.offers__title}>Ofertas</h2>
        <div className={styles.offersGrid}>
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addProduct={addProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
