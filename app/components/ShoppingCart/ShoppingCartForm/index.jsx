import PropTypes from 'prop-types';
import useCheckout from '../../../hooks/useCheckout';
import styles from './styles.module.css';

const ShoppingCartForm = ({ totalCost }) => {
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
      <p className={styles.form__paragraph}>Total S/ {totalCost}</p>
      <button className={styles.form__button} type="submit">
        Completar orden
      </button>
    </form>
  );
};

ShoppingCartForm.propTypes = {
  totalCost: PropTypes.string.isRequired,
};

export default ShoppingCartForm;
