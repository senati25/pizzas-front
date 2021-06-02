import PropTypes from 'prop-types';
import { Children } from 'react';
import styles from './styles.module.css';

const DashboardForm = ({ children, title, handleSubmit, onCancel }) => (
  <form
    onSubmit={handleSubmit}
    autoComplete="off"
    className={styles.dashboardForm}
  >
    {title && <h1 className={styles.dashboardForm__title}>{title}</h1>}

    <div className={styles.form__content}>
      {Children.map(children, (child) => (
        <>
          <div className={styles.form__group}>{child}</div>
        </>
      ))}
    </div>
    <div className={styles.dashboardForm__buttonsGroup}>
      <button className={styles.buttonsGroup__save} type="submit">
        Guardar
      </button>

      <button
        className={styles.buttonsGroup__cancel}
        type="button"
        onClick={onCancel}
      >
        Cancelar
      </button>
    </div>
  </form>
);

DashboardForm.defaultProps = { title: null };

const elementOrArrayOfElementPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.element),
  PropTypes.element,
]);

DashboardForm.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(elementOrArrayOfElementPropType),
    elementOrArrayOfElementPropType,
  ]).isRequired,
  onCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default DashboardForm;
