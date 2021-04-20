import usePublicContext from '../../../hooks/usePublicContext';
import useShoppingCart from '../../../hooks/useShoppingCart';
import ProductCard from '../../shared/ProductCard';
import Spinner from '../../shared/Spinner';
import styles from './styles.module.css';

const Offers = () => {
  const { products } = usePublicContext();
  const { addProduct } = useShoppingCart();

  return (
    <section className={styles.offers}>
      <div className={styles.offers__wrapper}>
        <h2 className={styles.offers__title}>Ofertas</h2>
        {products ? (
          <div className={styles.offersGrid}>
            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addProduct={addProduct}
              />
            ))}
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </section>
  );
};

export default Offers;
