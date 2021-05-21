import PropTypes from 'prop-types';
import useCheckout from '../../../hooks/useCheckout';
import useShoppingCartContext from '../../../hooks/useShoppingCartContext';
import styles from './styles.module.css';

const ShoppingCartForm = ({ totalCost }) => {
  const { shoppingCartProducts } = useShoppingCartContext();
  const { handleCreateOrder, handleOnChange } = useCheckout();

  return (
    <form className={styles.shopingCart__form} onSubmit={handleCreateOrder}>
      <textarea
        placeholder="Dejanos un mensaje"
        name="mensaje"
        rows="5"
        onChange={handleOnChange}
        maxLength="250"
      ></textarea>
      <p className={styles.form__paragraph}>Total S/.{totalCost}</p>
      <button
        className={styles.form__button}
        type="submit"
        disabled={shoppingCartProducts?.length === 0}
      >
        Completar orden
      </button>
    </form>
  );
};

ShoppingCartForm.propTypes = {
  totalCost: PropTypes.string.isRequired,
};

export default ShoppingCartForm;
