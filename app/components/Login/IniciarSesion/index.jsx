import React, { useState } from 'react';
import Link from 'next/link';
import useLogin from '../../../hooks/useLogin';
import style from '../style.module.css';

const IniciarSesion = () => {
  const {
    isLoading,
    setInputValues,
    handleIniciarSesion,
    handleOnChange,
  } = useLogin();
  return (
    <div className={style.LoginContainer}>
      <form onSubmit={handleIniciarSesion} method="post">
        <h2 className={style.TitleLogin}>LOGIN</h2>
        <div className={style.FormGroup}>
          <label htmlFor="usuario">
            Usuario
            <input
              type="text"
              className={style.formControl}
              name="usuario"
              id="usuario"
              onChange={handleOnChange}
            />
          </label>
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">
            Contraseña
            <input
              type="password"
              className={style.formControl}
              name="password"
              id="password"
              onChange={handleOnChange}
            />
          </label>
        </div>
        <div className={style.ButtonContainer}>
          <input
            type="submit"
            value="INICIAR SESION"
            className={style.ButtonRed}
          />
        </div>
        <br />
        <div className={style.formGroup}>
          <p className={style.textFooterFormRegister}>
            No tienes una cuenta? <Link href="/register">registrarse</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default IniciarSesion;
