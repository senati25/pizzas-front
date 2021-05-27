import PropTypes from 'prop-types';
import { useState } from 'react';
import { useOrderState } from '../shared/OrderContext';
import styles from './styles.module.css';

const ShoppingCart = ({ className }) => {
  const {
    state: { shoppingCart },
  } = useOrderState();

  const [isActive, setIsActive] = useState(false);

  if (isActive)
    return (
      <div className={`${className} ${styles.shoppingCartWrapper}`}>
        <div className={styles.shoppingCart}>
          <button
            className={styles.shoppingCart__closeButton}
            type="button"
            onClick={() => setIsActive(false)}
          >
            <i className="fas fa-times"></i>
          </button>

          <h3 className={styles.shoppingCart__title}>Lista de Productos</h3>

          <div>
            <ul>
              {shoppingCart.map((product) => (
                <li>{product.nombre}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );

  return (
    <button
      className={`${className} ${styles.shoppingCart__button}`}
      type="button"
      onClick={() => setIsActive(true)}
    >
      <i className="fas fa-shopping-cart fa-2x"></i>
    </button>
  );
};

ShoppingCart.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ShoppingCart;
