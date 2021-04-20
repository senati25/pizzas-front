import React, { useState } from 'react';

const Login = () => {
  const [inputValues, setInputValues] = useState({});
  const handleOnChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    console.log(inputValues);
  };

  return (
    <div>
      <label htmlFor="usuario">
        Usuario
        <input
          onChange={handleOnChange}
          type="text"
          name="usuario"
          id="usuario"
        />
      </label>
      <label htmlFor="contraseña">
        Contraseña
        <input
          onChange={handleOnChange}
          type="text"
          name="contraseña"
          id="contraseña"
        />
      </label>
    </div>
  );
};

export default Login;
