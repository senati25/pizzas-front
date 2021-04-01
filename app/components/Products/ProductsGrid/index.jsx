import useProducts from '../../../hooks/useProducts';
import useShoppingCart from '../../../hooks/useShoppingCart';
import ProductCard from '../../Home/ProductCard';
import styles from './styles.module.css';

const ProductsGrid = () => {
  const { addProduct } = useShoppingCart();
  const { products } = useProducts();

  return (
    <div className={styles.productsGrid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addProduct={addProduct}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
