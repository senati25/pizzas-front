import calculateTotal from '../../helpers/calculateTotal';
import useStoreContext from '../../hooks/useStoreContext';
import Spinner from '../shared/Spinner';
import ShoppingCartForm from './ShoppingCartForm';
import ShoppingCartProductsGrid from './ShoppingCartProductsGrid';
import styles from './styles.module.css';

const ShoppingCart = () => {
  const { store } = useStoreContext();

  return (
    <div className={styles.shopingCart__wrapper}>
      <div className={styles.shopingCart}>
        <h2 className={styles.shopingCart__title}>Carrito</h2>

        {store.shoppingCartProducts?.length ? (
          <div className={styles.shopingCart__content}>
            <div className={styles.shoppingCartProductsGrid__wrapper}>
              <ShoppingCartProductsGrid
                shoppingCartList={store.shoppingCartProducts}
              />
            </div>

            <ShoppingCartForm
              totalCost={calculateTotal(store.shoppingCartProducts)}
            />
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
