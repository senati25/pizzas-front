/* eslint-disable react/prop-types */
import Link from 'next/link';
import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import useRegister from '../../hooks/useRegister';
import Spinner from '../shared/Spinner';
import FormField from './FormField';
import styles from './styles.module.css';

const RegisterForm = () => {
  const {
    isLoading,
    schema,
    inputValues,
    // smsResponse,
    handleSubmitCreateCliente,
  } = useRegister();

  const [isValid, setIsValid] = useState(false);

  return (
    <div className={styles.form__container}>
      <Formik
        initialValues={inputValues}
        validationSchema={schema}
        onSubmit={(values, event) => {
          handleSubmitCreateCliente(values, event);
        }}
      >
        {(formik) => {
          useEffect(() => {
            console.log(formik.values);
            schema.isValid(formik.values).then((a) => {
              setIsValid(a);
            });
          }, [formik.values]);

          if (isLoading) return <Spinner />;

          return (
            <Form className={styles.form} autoComplete="nope">
              <Link href="/login">
                <a className={styles.form__loginButton}>Iniciar sesion</a>
              </Link>

              <h1 className={styles.form__title}>Registro</h1>
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
                // onKeyPress={(e) => e.target.value.length === 8}
                max={99999999}
                min={11111111}
                type="number"
              />
              <FormField
                label="Contraseña"
                name="password"
                placeholder="Ingrese su contraseña"
                type="password"
              />
              <FormField
                label="Confirmar contraseña"
                name="confirmPassword"
                placeholder="Ingrese su contraseña"
                type="password"
              />

              <button
                className={styles.form__button}
                disabled={!isValid}
                type="submit"
              >
                Registrarse
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default RegisterForm;
