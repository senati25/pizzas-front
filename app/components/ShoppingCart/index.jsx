import calculateTotal from '../../helpers/calculateTotal';
import useProductCard from '../../hooks/useProductCard';
import useShoppingCart from '../../hooks/useShoppingCart';
import InformationMessage from '../shared/InformationMessage';
import Spinner from '../shared/Spinner';
import ShoppingCartForm from './ShoppingCartForm';
import ShoppingCartProductCard from './ShoppingCartProductCard';
import ShoppingCartProductsGrid from './ShoppingCartProductsGrid';
import styles from './styles.module.css';

const ShoppingCart = () => {
  const { shoppingCartProducts } = useShoppingCart();

  const { plusOne, minusOne } = useProductCard();
  return (
    <div className={styles.shopingCart__wrapper}>
      <div className={styles.shopingCart}>
        <h2 className={styles.shopingCart__title}>Carrito</h2>

        {shoppingCartProducts?.length ? (
          <div className={styles.shopingCart__content}>
            <div className={styles.shoppingCartProductsGrid__wrapper}>
              <ShoppingCartProductsGrid>
                {shoppingCartProducts.length ? (
                  shoppingCartProducts.map((product, index) => (
                    <ShoppingCartProductCard
                      key={product.id}
                      plusOne={plusOne}
                      minusOne={minusOne}
                      index={index}
                      product={product}
                    />
                  ))
                ) : (
                  <InformationMessage messageText="Aun no haz añadido ningún articulo" />
                )}
              </ShoppingCartProductsGrid>
            </div>

            <ShoppingCartForm
              totalCost={calculateTotal(shoppingCartProducts)}
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
