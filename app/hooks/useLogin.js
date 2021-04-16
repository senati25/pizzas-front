import { useState } from 'react';
import Swal from 'sweetalert2';

import ROUTES from '../helpers/constants';

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cliente, setCliente] = useState({});
  const [inputValues, setInputValues] = useState({});
  const handleIniciarSesion = async (e) => {
    console.log(inputValues);
    e.preventDefault();
    /*  setIsLoading(true);
    const response = await fetch(`${ROUTES.api}/publico/login`, {
      method: 'POST',
      body: JSON.stringify(inputValues),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (data) {
      setIsLoading(false);
      setCliente(...data);
      Swal.fire('', 'Hola Bienvenido de vuelta', 'success');
    } else {
      // TODO
      setIsLoading(false);
      Swal.fire('', 'Verifica que tus datos sean los correctos', 'info');
    } */
  };

  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    isLoading,
    setInputValues,
    handleIniciarSesion,
    handleOnChange,
  };
};

export default useLogin;
