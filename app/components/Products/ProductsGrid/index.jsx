import { memo } from 'react';
import useProducts from '../../../hooks/useProducts';
import ProductCard from '../../shared/ProductCard';
import Spinner from '../../shared/Spinner';
import styles from './styles.module.css';

const ProductsGrid = memo(({ products, isLoading }) => (
  <>
    {!isLoading ? (
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard
            key={`${product.id}${product.denominacion}`}
            product={product}
          />
        ))}
      </div>
    ) : (
      <Spinner />
    )}
  </>
));

export default ProductsGrid;
