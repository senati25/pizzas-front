import Image from 'next/image';
import useLoginDashboard from '../../../hooks/useLoginDashboard';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import style from './style.module.css';

const Login = () => {
  const { isLoading, handleOnChange, handleSubmitLogin } = useLoginDashboard();

  return (
    <>
      <div className={style.LoginContainer}>
        <div className={style.form__content}>
          {!isLoading ? (
            <form onSubmit={handleSubmitLogin} autoComplete="off">
              <div className={style.form__logo}>
                <Image
                  alt="brand logo"
                  src="/images/brand-logo.png"
                  width={70}
                  height={70}
                />
              </div>

              <h1 className={style.TitleLogin}>INVVIAGGIO</h1>
              <div className={style.FormGroup}>
                <label htmlFor="usuario">
                  Usuario
                  <input
                    autoComplete="off"
                    type="text"
                    className={style.formControl}
                    name="email"
                    id="email"
                    onChange={handleOnChange}
                    placeholder="Ingrese su usuario"
                  />
                </label>
              </div>
              <div className={style.FormGroup}>
                <label htmlFor="password">
                  Contraseña
                  <input
                    type="password"
                    className={style.formControl}
                    name="password"
                    id="password"
                    onChange={handleOnChange}
                    placeholder="Ingrese su contraseña"
                  />
                </label>
              </div>

              <button className={style.form__button} type="submit">
                INICIAR SESION
              </button>

              <br />
            </form>
          ) : (
            <SpinnerDashboard />
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
