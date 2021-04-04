import { useRouter } from 'next/router';
import ProductsGrid from './ProductsGrid';
import Search from './Search';
import styles from './styles.module.css';
import MyShoppingList from './MyShoppingList';
import ROUTES from '../../helpers/constants';

const Products = () => {
  const router = useRouter();
  return (
    <div className={styles.productsWrapper}>
      <div className={styles.products}>
        <h2 className={styles.products__title}>Productos</h2>

        <div className={styles.products__content}>
          <div className={styles.MyShoppingList__wrapper}>
            <div className={styles.MyShoppingList}>
              <button
                className={styles.MyShoppingList__button}
                type="button"
                onClick={() => {
                  router.push(ROUTES.public.shoppingCart);
                }}
              >
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
};

export default Products;
