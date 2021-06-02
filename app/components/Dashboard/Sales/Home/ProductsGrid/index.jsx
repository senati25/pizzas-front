import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import styles from './styles.module.css';

const ProductsGrid = ({ products }) => (
  <ul className={styles.products__grid}>
    {products?.length > 0 &&
      products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
  </ul>
);

ProductsGrid.defaultProps = { products: [] };

ProductsGrid.propTypes = {
  products: PropTypes.oneOfType([PropTypes.array.isRequired]),
};

export default ProductsGrid;
