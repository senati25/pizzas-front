import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import useMyAccountUpdate from '../../../hooks/useMyAccountUpdate';
import FormField from './FormField';
import Container from '../Container';
import Spinner from '../../shared/Spinner';
import styles from './styles.module.css';

const Profile = () => {
  const {
    inputValues,
    isLoading,
    schema,
    handleUpdateMyAccount,
  } = useMyAccountUpdate();
  return (
    <Container title="Mis datos personales">
      <div>
        <Formik
          initialValues={inputValues}
          validationSchema={schema}
          onSubmit={(values) => handleUpdateMyAccount(values)}
        >
          {(formik) => {
            const [submitDisabled, setSubmitDisabled] = useState(true);

            useEffect(() => {
              schema
                .isValid(formik.values)
                .then((isValid) => setSubmitDisabled(!isValid));
            }, [formik.values]);

            if (isLoading) return <Spinner />;
            return (
              <Form className={styles.form}>
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
    </Container>
  );
};

export default Profile;
