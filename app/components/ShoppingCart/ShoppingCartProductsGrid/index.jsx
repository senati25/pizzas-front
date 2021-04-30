import { oneOfType, array } from 'prop-types';
import useShoppingCartHandlers from '../../../hooks/useShoppingCartHandlers';
import InformationMessage from '../../shared/InformationMessage';
import ShoppingCartProductCard from '../ShoppingCartProductCard';
import styles from './styles.module.css';

const ShoppingCartProductsGrid = ({ shoppingCartProducts }) => {
  const {
    handlePlusOne,
    handleMinusOne,
    handleDeleteProduct,
  } = useShoppingCartHandlers();

  if (!shoppingCartProducts.length)
    return (
      <InformationMessage messageText="Aun no haz añadido ningún articulo" />
    );

  return (
    <div className={styles.shoppingCartProductsGrid}>
      <span className={styles.grid__header}>Item</span>
      <span className={styles.grid__header}>Cantidad</span>
      <span className={styles.grid__header}>Precio</span>
      <span className={styles.grid__header}>Subtotal</span>

      {shoppingCartProducts.map((product) => (
        <ShoppingCartProductCard
          key={product.id}
          plusOne={handlePlusOne}
          minusOne={handleMinusOne}
          product={product}
          deleteProduct={handleDeleteProduct}
        />
      ))}
    </div>
  );
};

// const elementOrArrayOfElementPropType = PropTypes.oneOfType([
//   PropTypes.arrayOf(PropTypes.element),
//   PropTypes.element,
// ]);

ShoppingCartProductsGrid.propTypes = {
  shoppingCartProducts: oneOfType([array]).isRequired,
};

export default ShoppingCartProductsGrid;
