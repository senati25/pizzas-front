import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import { object, string, number } from 'yup';
import FormField from './FormField';
import { useOrderState } from '../shared/OrderContext';
import styles from './styles.module.css';

const ClientForm = ({ className, title }) => {
  const {
    state: { formValues, submitDisabled },
    dispatch,
    actionType,
  } = useOrderState();

  const schema = object({
    nombre: string()
      .trim()
      .max(50, '*Debe contener 50 caracteres o menos')
      .ensure()
      .required('*Requerido'),
    apellido: string()
      .trim()
      .max(50, '*Debe contener 50 caracteres o menos')
      .ensure()
      .required('*Requerido'),
    correo: string()
      .trim()
      .lowercase()
      .email('*El correo es invalido')
      .required('*El correo es requerido'),
    dni: number()
      .min(11111111, '*Debe contener 8 caracteres')
      .max(99999999, '*Debe contener 8 caracteres')
      .required('*Requerido'),
    direccion: string()
      .max(100, '*Debe contener maximo 100 caracteres')
      .required('*Requerido'),
  });

  return (
    <div className={className}>
      {title}

      <Formik initialValues={formValues} validationSchema={schema}>
        {(formik) => {
          useEffect(() => {
            schema.isValid(formik.values).then((isValid) => {
              dispatch({
                type: actionType.SET_SUBMIT_DISABLED,
                payload: !isValid,
              });

              if (isValid)
                dispatch({
                  type: actionType.SET_FORM_VALUES,
                  payload: formik.values,
                });
            });
          }, [formik.values]);

          return (
            <Form>
              <div className={styles.form__grid}>
                <FormField
                  label="Nombre"
                  name="nombre"
                  placeholder="Ingrese su nombre"
                  type="text"
                />

                <FormField
                  label="Apellido"
                  name="apellido"
                  placeholder="Ingrese su apellido"
                  type="text"
                />

                <FormField
                  label="Correo"
                  name="correo"
                  placeholder="Ingrese su correo"
                  type="email"
                />

                <FormField
                  label="Direccion"
                  name="direccion"
                  placeholder="Ingrese su dirección"
                  type="text"
                />

                <FormField
                  label="Dni"
                  name="dni"
                  placeholder="Ingrese su dni"
                  max={99999999}
                  min={11111111}
                  type="number"
                />
              </div>

              <button
                className={styles.form__button}
                onClick={formik.handleReset}
                type="button"
              >
                Reset
              </button>

              <button
                className={styles.form__button}
                disabled={submitDisabled}
                type="submit"
              >
                Guardar cambios
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

ClientForm.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
};

export default ClientForm;
