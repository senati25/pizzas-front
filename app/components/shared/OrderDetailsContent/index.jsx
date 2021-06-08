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

  const cliente = {
    nombre: order?.factura?.cliente_nombre || '',
    apellido: order?.factura?.cliente_apellido || '',
    direccion: order?.factura?.cliente_direccion || '',
    dni: order?.factura?.cliente_dni || '',
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
            {status?.accion}
          </button>
        )}

        <div>
          <h2 className={styles.info__title}>
            Detalles <hr />
          </h2>

          <div className={styles.grid}>
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
          <div className={styles.grid}>
            {Object.keys(cliente).map((key) => (
              <Fragment key={key}>
                <span className={styles.formValues__key}>
                  {key.charAt(0).toUpperCase() + key.substring(1)}:{' '}
                </span>

                <span>{cliente[key]}</span>
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
    estado_pedido_id: PropTypes.number.isRequired,
    estado: PropTypes.string.isRequired,
    detalles: PropTypes.oneOfType([PropTypes.array.isRequired]).isRequired,
    total: PropTypes.number.isRequired,
    factura: PropTypes.shape({
      id: PropTypes.number.isRequired,
      fecha: PropTypes.string.isRequired,
      igv: PropTypes.string.isRequired,
      cliente_nombre: PropTypes.string.isRequired,
      cliente_apellido: PropTypes.string.isRequired,
      cliente_direccion: PropTypes.string.isRequired,
      cliente_dni: PropTypes.number.isRequired,
      pedido_id: PropTypes.number.isRequired,
    }),
  }).isRequired,
  handleUpdateOrderStatus: PropTypes.func.isRequired,
  nextStatus: PropTypes.number,
  orderStatus: PropTypes.oneOfType([PropTypes.array.isRequired]).isRequired,
};

export default OrderDetailsContent;
