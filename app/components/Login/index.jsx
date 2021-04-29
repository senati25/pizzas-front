import Link from 'next/link';
import useLogin from '../../hooks/useLogin';

import PublicForm from '../shared/PublicForm';
import FormField from '../shared/FormField';
import styles from './styles.module.css';

const Login = () => {
  const { isLoading, inputValues, schema } = useLogin();

  return (
    <PublicForm
      buttonText="Ingresar"
      isLoading={isLoading}
      initialValues={inputValues}
      validationSchema={schema}
      formFooter={
        <div className={styles.form__footer}>
          <hr />
          <p>
            ¿No tienes una cuenta?
            <Link href="/register">
              <strong>
                <a> Registrate</a>
              </strong>
            </Link>
          </p>
        </div>
      }
    >
      <h1 className={styles.form__title}>Iniciar Sesión</h1>

      <FormField
        label="Correo"
        name="correo"
        placeholder="Ingrese su correo"
        type="email"
      />

      <FormField
        label="Contraseña"
        name="password"
        placeholder="Ingrese su contraseña"
        type="password"
      />
    </PublicForm>
  );
};
export default Login;
