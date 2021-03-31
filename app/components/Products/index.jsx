import styles from './styles.module.css';

const Products = () => (
  <div className={styles.productsWrapper}>
    <div className={styles.products}>
      <h2 className={styles.products__title}>Productos</h2>
      <div className={styles.products__content}>
        <div>Productos Added</div>
        <div>Productos Search</div>
        <div className={styles.productsGrid}>Productos Grid</div>
      </div>
    </div>
  </div>
);

export default Products;
