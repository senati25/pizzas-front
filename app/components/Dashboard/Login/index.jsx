import useLoginDashboard from '../../../hooks/useLoginDashboard';
import style from './style.module.css';

const Login = () => {
  const { isLoading, handleOnChange, handleSubmitLogin } = useLoginDashboard();

  return (
    <>
      {!isLoading && (
        <div className={style.LoginContainer}>
          <form onSubmit={handleSubmitLogin} method="post">
            <h2 className={style.TitleLogin}>LOGIN</h2>
            <div className={style.FormGroup}>
              <label htmlFor="usuario">
                Usuario
                <input
                  type="text"
                  className={style.formControl}
                  name="email"
                  id="email"
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
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
