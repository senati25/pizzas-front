import React from 'react';
import Link from 'next/link';
import style from '../style.module.css';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import useClients from '../../../hooks/useClients';

const RegisterForm = () => {
  const {
    isLoadingRegister,
    smsResponse,

    handleSubmitCreateCliente,
    handleOnChange,
  } = useClients();
  return !isLoadingRegister ? (
    <div className={style.LoginContainer}>
      <form onSubmit={handleSubmitCreateCliente}>
        <h2 className={style.TitleLogin}>Registrarse</h2>
        <div className={style.FormGroup}>
          <label htmlFor="usuario">
            Nombres
            <input
              onChange={handleOnChange}
              type="text"
              name="nombre"
              id="nombre"
              className={style.formControl}
              required
            />
          </label>
        </div>

        <div className={style.FormGroup}>
          <label htmlFor="apellido">
            Apellidos
            <input
              onChange={handleOnChange}
              type="text"
              className={style.formControl}
              name="apellido"
              required
              id="apellido"
            />
          </label>
        </div>

        <div className={style.FormGroup}>
          <label htmlFor="correo">
            Correo
            <input
              className={style.formControl}
              onChange={handleOnChange}
              type="email"
              name="correo"
              required
              id="correo"
            />
          </label>
        </div>

        <div className={style.FormGroup}>
          <label htmlFor="dni">
            Dni
            <input
              className={style.formControl}
              onChange={handleOnChange}
              type="text"
              name="dni"
              id="dni"
              maxLength="8"
              required
            />
          </label>
        </div>
        <div className={style.FormGroup}>
          <label htmlFor="direccion">
            Direccion
            <input
              className={style.formControl}
              onChange={handleOnChange}
              type="text"
              name="direccion"
              id="direccion"
            />
          </label>
        </div>
        <div className={style.FormGroup}>
          <label htmlFor="direccion">
            Contraseña
            <input
              className={style.formControl}
              onChange={handleOnChange}
              type="password"
              name="password"
              id="password"
            />
          </label>
        </div>
        <div className={style.ButtonContainer}>
          <input
            type="submit"
            value="REGISTRARSE"
            className={style.ButtonRed}
          />
        </div>
        <br />
        <div className={style.smsResponse}>
          <small>
            <code>{smsResponse}</code>
          </small>
        </div>
        <div className={style.formGroup}>
          <p className={style.textFooterFormRegister}>
            Ya tienes una cuenta? <Link href="/login">Iniciar sesion</Link>
          </p>
        </div>
      </form>
    </div>
  ) : (
    <SpinnerDashboard />
  );
};
export default RegisterForm;
