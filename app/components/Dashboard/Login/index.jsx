import useLoginDashboard from '../../../hooks/useLoginDashboard';

const Login = () => {
  const { isLoading, handleOnChange, handleSubmitLogin } = useLoginDashboard();

  return (
    <>
      {!isLoading && (
        <form onSubmit={handleSubmitLogin} autoComplete="off">
          <label htmlFor="email">
            Email
            <input
              onChange={handleOnChange}
              type="text"
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="password">
            Contraseña
            <input
              onChange={handleOnChange}
              type="text"
              name="password"
              id="password"
            />
          </label>

          <button type="submit">Login</button>
        </form>
      )}
    </>
  );
};

export default Login;
