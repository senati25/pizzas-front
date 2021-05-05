import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import fetcher from '../../lib/fetcher';
import useSessionContext from './useSessionContext';

const useLogin = () => {
  const router = useRouter();
  const { mutateSession } = useSessionContext();

  const [isLoading, setIsLoading] = useState(false);
  const [_isMounted, setIsMounted] = useState(true);
  const inputValues = { correo: '', password: '' };

  const schema = Yup.object({
    correo: Yup.string()
      .trim()
      .lowercase()
      .email('*El correo es invalido')
      .required('*Email es requerido'),
    password: Yup.string()
      .trim()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        '*La contraseña debe contener minimo 8 caracteres, una minuscula, una mayuscula y un número'
      )
      .required('*Contraseña es requerido'),
  });

  const handleLogin = async (values) => {
    setIsLoading(true);

    try {
      const data = await mutateSession(
        await fetcher('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })
      );

      if (!data.error) {
        router.back();
      } else {
        toast.warn(data.message, {
          position: 'top-center',
          autoClose: 7000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { textAlign: 'center' },
        });
        if (_isMounted) setIsLoading(false);
      }
    } catch (error) {
      if (_isMounted) setIsLoading(false);
      console.error('An unexpected error happened:', error);
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
    inputValues,
    schema,
    handleLogout,
    handleLogin,
  };
};

export default useLogin;
