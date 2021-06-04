import { Fragment } from 'react';
import PropTypes from 'prop-types';
import OrderDetailsTable from '../OrderDetailsTable';
import styles from './styles.module.css';

const OrderDetailsContent = ({
  order,
  handleUpdateOrderStatus,
  orderStatus,
  nextStatus,
}) => {
  const status = orderStatus.find(({ id }) => id === nextStatus);

  const details = {
    fecha: order.fecha,
    tipo: order.tipo,
    total: order.total,
    mensaje: order.mensaje,
    estado: order.estado,
  };

  const buttonIsDisabled = nextStatus === order?.estado_pedido_id;

  return (
    <div className={styles.content}>
      <OrderDetailsTable order={order} />

      <div className={styles.order__info}>
        {status && (
          <button
            className={styles.nextStatus__button}
            type="button"
            onClick={handleUpdateOrderStatus}
            disabled={buttonIsDisabled}
          >
            {status?.denominacion}
          </button>
        )}

        <div>
          <h2 className={styles.info__title}>
            Detalles <hr />
          </h2>

          <div className={styles.formValues__content}>
            {Object.keys(details).map((key) => (
              <Fragment key={key}>
                {details[key] && (
                  <>
                    <span className={styles.formValues__key}>
                      {key.charAt(0).toUpperCase() + key.substring(1)}:
                    </span>

                    <span>{details[key]}</span>
                  </>
                )}
              </Fragment>
            ))}
          </div>
        </div>
        <div>
          <h2 className={styles.info__title}>
            Datos Cliente <hr />
          </h2>
          <div className={styles.formValues__content}>
            {Object.keys(order.cliente).map((key) => (
              <Fragment key={key}>
                <span className={styles.formValues__key}>
                  {key.charAt(0).toUpperCase() + key.substring(1)}:{' '}
                </span>

                <span>{order.cliente[key]}</span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

OrderDetailsContent.defaultProps = {
  nextStatus: null,
};

OrderDetailsContent.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    fecha: PropTypes.string.isRequired,
    mensaje: PropTypes.string,
    tipo: PropTypes.string.isRequired,
    cliente_id: PropTypes.number.isRequired,
    estado_pedido_id: PropTypes.number.isRequired,
    cliente: PropTypes.oneOfType([PropTypes.object.isRequired]).isRequired,
    estado: PropTypes.string.isRequired,
    detalles: PropTypes.oneOfType([PropTypes.array.isRequired]).isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  handleUpdateOrderStatus: PropTypes.func.isRequired,
  nextStatus: PropTypes.number,
  orderStatus: PropTypes.oneOfType([PropTypes.array.isRequired]).isRequired,
};

export default OrderDetailsContent;
