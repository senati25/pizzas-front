import PropTypes from 'prop-types';
import useCheckout from '../../../hooks/useCheckout';
import styles from './styles.module.css';

const ShoppingCartForm = ({ totalCost }) => {
  const { handleCreateOrder } = useCheckout();
  return (
    <form className={styles.shopingCart__form} onSubmit={handleCreateOrder}>
      <textarea
        placeholder="Dejanos un mensaje"
        name="message"
        rows="5"
        onChange={(e) => {
          console.log(e.target.value);
        }}
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
