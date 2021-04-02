import ProductsGrid from './ProductsGrid';
import Search from './Search';
import styles from './styles.module.css';
import MyShoppingList from './MyShoppingList';

const Products = () => (
  <div className={styles.productsWrapper}>
    <div className={styles.products}>
      <h2 className={styles.products__title}>Productos</h2>

      <div className={styles.products__content}>
        <div className={styles.myProducts__wrapper}>
          <div className={styles.myProducts}>
            <button className={styles.myProducts__button} type="button">
              Ir al carrito
            </button>
            <MyShoppingList />
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
