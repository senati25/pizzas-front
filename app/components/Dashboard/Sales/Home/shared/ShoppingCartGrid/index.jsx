import { Fragment } from 'react';
import calculateTotal from '../../../../../../helpers/calculateTotal';
import getPrice from '../../../../../../helpers/getPrice';
import { useOrderState } from '../OrderContext';
import styles from './styles.module.css';

const ShoppingCartGrid = () => {
  const {
    state: { shoppingCart },
    dispatch,
    actionType,
  } = useOrderState();
  return (
    <div className={styles.grid}>
      <span className={styles.grid__header}>Item</span>
      <span className={styles.grid__header}>Cantidad</span>
      <span className={styles.grid__header}>Precio</span>
      <span className={styles.grid__header}>Subtotal</span>
      {shoppingCart.map((product, index) => (
        <Fragment key={product.nombre + product.variedad}>
          <span className={`${styles.row} ${styles.product__info}`}>
            <span>
              {product.nombre.charAt(0) +
                product.nombre.substring(1).toLowerCase()}
            </span>
            <span>{product.variedad.toUpperCase()}</span>
            <button
              className={styles.deleteButton}
              type="button"
              onClick={() =>
                dispatch({
                  type: actionType.DELETE_PRODUCT,
                  payload: index,
                })
              }
            >
              Eliminar
            </button>
          </span>

          <span className={`${styles.row} ${styles.product__cantidad}`}>
            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: actionType.UPDATE_PRODUCT,
                  payload: { ...product, cantidad: product.cantidad + 1 },
                })
              }
            >
              +
            </button>

            <input
              type="number"
              name="precio"
              id="precio"
              value={product.cantidad}
              onChange={(e) => {
                console.log(e.target.value);
                if (e.target.value >= 1) {
                  dispatch({
                    type: actionType.UPDATE_PRODUCT,
                    payload: {
                      ...product,
                      cantidad: parseInt(e.target.value, 10),
                    },
                  });
                }
              }}
            />

            <button
              type="button"
              onClick={() => {
                if (product.cantidad > 1) {
                  dispatch({
                    type: actionType.UPDATE_PRODUCT,
                    payload: { ...product, cantidad: product.cantidad - 1 },
                  });
                }
              }}
            >
              -
            </button>
          </span>

          <span className={`${styles.row} ${styles.product__precio}`}>
            {parseFloat(getPrice(product)).toFixed(2)}
          </span>

          <span className={`${styles.row} ${styles.product__subtotal}`}>
            {parseFloat(getPrice(product) * product.cantidad).toFixed(2)}
          </span>
        </Fragment>
      ))}
      <span className={styles.grid__footer}></span>
      <span className={styles.grid__footer}></span>
      <span className={styles.grid__footer}>Total</span>
      <span className={styles.grid__footer}>
        S/.{parseFloat(calculateTotal(shoppingCart)).toFixed(2)}
      </span>
    </div>
  );
};

export default ShoppingCartGrid;
