import Link from 'next/link';
import useLogin from '../../../hooks/useLogin';
import style from '../style.module.css';
import Spinner from '../../shared/Spinner';

const IniciarSesion = () => {
  const { isLoading, handleLogin, handleOnChange } = useLogin();

  if (isLoading) <Spinner />;

  return (
    <div className={style.LoginContainer}>
      <form onSubmit={handleLogin} method="post">
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
            value="Iniciar Sesion"
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
