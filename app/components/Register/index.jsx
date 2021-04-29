import Link from 'next/link';
import useRegister from '../../hooks/useRegister';
import FormField from '../shared/FormField';
import styles from './styles.module.css';
import PublicForm from '../shared/PublicForm';

const Register = () => {
  const {
    isLoading,
    schema,
    inputValues,
    handleSubmitCreateCliente,
  } = useRegister();

  return (
    <PublicForm
      isLoading={isLoading}
      initialValues={inputValues}
      validationSchema={schema}
      onSubmit={(values, event) => {
        handleSubmitCreateCliente(values, event);
      }}
    >
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
    </PublicForm>
  );
};
export default Register;
