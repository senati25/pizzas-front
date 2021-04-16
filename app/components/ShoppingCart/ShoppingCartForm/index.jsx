import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ShoppingCartForm = ({ totalCost }) => (
  <form className={styles.shopingCart__form}>
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
    <button className={styles.form__button} type="button" disabled>
      Completar orden
    </button>
  </form>
);

ShoppingCartForm.propTypes = {
  totalCost: PropTypes.string.isRequired,
};

export default ShoppingCartForm;
