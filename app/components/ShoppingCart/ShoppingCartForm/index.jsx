import PropTypes from 'prop-types';
import useCheckout from '../../../hooks/useCheckout';
import usePublicContext from '../../../hooks/usePublicContext';
import useShoppingCartContext from '../../../hooks/useShoppingCartContext';
import styles from './styles.module.css';

const ShoppingCartForm = ({ totalCost }) => {
  const { igv = {} } = usePublicContext();
  const { shoppingCartProducts } = useShoppingCartContext();
  const { handleCreateOrder, handleOnChange, setIsForDelivery } = useCheckout();

  return (
    <form className={styles.shopingCart__form} onSubmit={handleCreateOrder}>
      <button
        className={styles.form__button}
        type="submit"
        disabled={shoppingCartProducts?.length === 0}
      >
        Completar orden
      </button>

      <div className={styles.delivery}>
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

      <div className={styles.price__info}>
        <span className={styles.info__description}>Subtotal:</span>
        <span className={styles.info__value}>{totalCost}</span>
        <span className={styles.info__description}>Igv:</span>
        <span className={styles.info__value}>
          {(igv?.valor / 100) * totalCost}
        </span>
        <span className={styles.info__description}>Total:</span>
        <span className={styles.info__value}>
          {parseFloat(totalCost) + (igv.valor / 100) * totalCost}
        </span>
      </div>

      <textarea
        placeholder="Dejanos un mensaje"
        name="mensaje"
        rows="5"
        onChange={handleOnChange}
        maxLength="250"
      ></textarea>
    </form>
  );
};

ShoppingCartForm.propTypes = {
  totalCost: PropTypes.string.isRequired,
};

export default ShoppingCartForm;
