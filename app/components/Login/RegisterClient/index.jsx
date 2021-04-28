/* eslint-disable react/prop-types */
import Link from 'next/link';
import { Formik, Form, ErrorMessage, useField } from 'formik';
import { useEffect, useState } from 'react';
import useRegister from '../../../hooks/useRegister';
import styles from './styles.module.css';
import Spinner from '../../shared/Spinner';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.FormGroup}>
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`${styles.formControl} ${
          meta.touched && meta.error && styles.is__invalid
        }`}
        {...field}
        {...props}
        autoComplete="nope"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className={`${styles.error}`}
      />
    </div>
  );
};

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
              <TextField
                label="Nombre"
                name="nombre"
                placeholder="Ingrese su nombre"
                type="text"
              />
              <TextField
                label="Apellido"
                name="apellido"
                placeholder="Ingrese su apellido"
                type="text"
              />
              <TextField
                label="Correo"
                name="correo"
                placeholder="Ingrese su correo"
                type="email"
              />

              <TextField
                label="Direccion"
                name="direccion"
                placeholder="Ingrese su direccion"
                type="text"
              />

              <TextField
                label="Dni"
                name="dni"
                placeholder="Ingrese su dni"
                // onKeyPress={(e) => e.target.value.length === 8}
                max={99999999}
                min={11111111}
                type="number"
              />
              <TextField
                label="Contraseña"
                name="password"
                placeholder="Ingrese su contraseña"
                type="password"
              />
              <TextField
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
