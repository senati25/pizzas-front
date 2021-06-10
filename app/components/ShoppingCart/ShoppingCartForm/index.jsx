import PropTypes from 'prop-types';
import useCheckout from '../../../hooks/useCheckout';
import useShoppingCartContext from '../../../hooks/useShoppingCartContext';
import styles from './styles.module.css';

const ShoppingCartForm = ({ totalCost }) => {
  const { shoppingCartProducts } = useShoppingCartContext();
  const { handleCreateOrder, handleOnChange, setIsForDelivery } = useCheckout();

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

      <div>
        <input
          type="checkbox"
          name="delivery"
          id=""
          onChange={(event) => {
            setIsForDelivery(event.target.checked);
          }}
        />
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="delivery">Delivery</label>
      </div>
    </form>
  );
};

ShoppingCartForm.propTypes = {
  totalCost: PropTypes.string.isRequired,
};

export default ShoppingCartForm;
