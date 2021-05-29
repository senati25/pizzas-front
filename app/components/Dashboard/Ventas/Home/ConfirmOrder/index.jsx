import PropTypes from 'prop-types';
import { Fragment } from 'react';
import useCheckoutDashboard from '../../../../../hooks/useCheckoutDashboard';
import { useOrderState } from '../shared/OrderContext';
import ShoppingCartGrid from '../shared/ShoppingCartGrid';
import styles from './styles.module.css';

const ConfirmOrder = ({ className, title }) => {
  const {
    state: { formValues, shoppingCart },
  } = useOrderState();

  const { handleCreateOrder } = useCheckoutDashboard();

  return (
    <div className={className}>
      {title}
      <div className={styles.wrapper}>
        <div className={styles.formValues}>
          <div>
            <h3 className={styles.section__title}>
              Datos del cliente
              <hr />
            </h3>
            <div className={styles.formValues__content}>
              {Object.keys(formValues).map((key) => (
                <Fragment key={key}>
                  <span className={styles.formValues__key}>
                    {key.charAt(0).toUpperCase() + key.substring(1)}:{' '}
                  </span>

                  <span>{formValues[key]}</span>
                </Fragment>
              ))}
            </div>
          </div>

          <button
            className={styles.form__button}
            type="button"
            onClick={(e) => {
              handleCreateOrder(e, formValues, shoppingCart);
              console.table();
            }}
          >
            Confirmar
          </button>
        </div>

        <div>
          <h3 className={styles.section__title}>
            Lista de Productos
            <hr />
          </h3>
          <ShoppingCartGrid />
        </div>
      </div>
    </div>
  );
};

ConfirmOrder.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
};
export default ConfirmOrder;
