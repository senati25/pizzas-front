import { memo } from 'react';
import useProducts from '../../../hooks/useProducts';
import useShoppingCart from '../../../hooks/useShoppingCart';
import ProductCard from '../../shared/ProductCard';
import Spinner from '../../shared/Spinner';
import styles from './styles.module.css';

const ProductsGrid = memo(() => {
  const { addProduct } = useShoppingCart();
  const { products, isLoading } = useProducts();

  return (
    <>
      {!isLoading ? (
        <div className={styles.productsGrid}>
          {products.map((product) => (
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
    </>
  );
});

export default ProductsGrid;
