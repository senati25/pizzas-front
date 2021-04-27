import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import fetcher from '../../lib/fetcher';
import useSessionContext from './useSessionContext';

const useLogin = () => {
  const router = useRouter();
  const { mutateSession } = useSessionContext();
  const [isLoading, setIsLoading] = useState(false);

  const [inputValues, setInputValues] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [_isMounted, setIsMounted] = useState(true);

  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { isLoggedIn } = await mutateSession(
        await fetcher('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            correo: inputValues.email,
            password: inputValues.password,
          }),
        })
      );

      if (_isMounted && isLoggedIn) {
        setIsLoading(false);
        Swal.fire('', 'Hola Bienvenido de vuelta', 'success');
      } else {
        setIsLoading(false);
        Swal.fire('', 'Verifica que tus datos sean los correctos', 'info');
      }
    } catch (error) {
      if (_isMounted) {
        setIsLoading(false);
        console.error('An unexpected error happened:', error);
        setErrorMessage(error.data.message);
      }
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    mutateSession(await fetcher('/api/logout', { method: 'POST' }), false);
    router.push('/');
  };

  useEffect(
    () => () => {
      setIsMounted(false);
    },
    []
  );

  return {
    isLoading,
    handleOnChange,
    handleLogout,
    handleLogin,
    errorMessage,
  };
};

export default useLogin;
