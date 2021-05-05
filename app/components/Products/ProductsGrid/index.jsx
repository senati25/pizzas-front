import { memo } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../shared/ProductCard';
import Spinner from '../../shared/Spinner';
import styles from './styles.module.css';

const ProductsGrid = memo(({ products }) => (
  <>
    {products ? (
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

ProductsGrid.propTypes = {
  products: PropTypes.oneOfType([PropTypes.array.isRequired]).isRequired,
};

export default ProductsGrid;
