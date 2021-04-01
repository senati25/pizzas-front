import ProductsGrid from './ProductsGrid';
import Search from './Search';
import MyProducts from './MyProducts';
import styles from './styles.module.css';

const Products = () => (
  <div className={styles.productsWrapper}>
    <div className={styles.products}>
      <h2 className={styles.products__title}>Productos</h2>
      <div className={styles.products__content}>
        <div className={styles.myProducts__wrapper}>
          <div style={{ position: 'sticky', top: '7rem' }}>
            <MyProducts />
          </div>
        </div>

        <div className={styles.search__wrapper}>
          <Search />
        </div>

        <div className={styles.productsGrid__wrapper}>
          <ProductsGrid />
        </div>
      </div>
    </div>
  </div>
);

export default Products;
