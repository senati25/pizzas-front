import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import fetcher from '../../lib/fetcher';
import useSessionContext from './useSessionContext';

const useMyAccountUpdate = () => {
  const router = useRouter();
  const { session, mutateSession } = useSessionContext();
  const [_isMounted, setIsMounted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const inputValues = {
    nombre: session?.nombre,
    apellido: session?.apellido,
    correo: session?.correo,
    dni: session?.dni,
    direccion: session?.direccion,
  };

  const schema = Yup.object({
    nombre: Yup.string()
      .trim()
      .max(50, '*Debe contener 50 caracteres o menos')
      .ensure()
      .required('*Requerido'),
    apellido: Yup.string()
      .trim()
      .max(50, '*Debe contener 50 caracteres o menos')
      .ensure()
      .required('*Requerido'),
    correo: Yup.string()
      .trim()
      .lowercase()
      .email('*El correo es invalido')
      .required('*El correo es requerido'),
    dni: Yup.number()
      .max(99999999, '*Debe contener 8 caracteres')
      .required('*Requerido'),
    direccion: Yup.string()
      .max(100, '*Debe contener maximo 100 caracteres')
      .required('*Requerido'),
  });

  const handleUpdateMyAccount = async (values) => {
    setIsLoading(true);

    const data = await mutateSession(
      await fetcher('/api/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: session.id, values }),
      })
    );

    if (!data.error) {
      toast.success(data.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      router.push('/account/profile');
      if (_isMounted) {
        // mutateSession((state) => ({ ...state, ...data.payload }));
        setIsLoading(false);
      }
    } else {
      toast.warn(data.message, {
        position: 'top-center',
        autoClose: 7000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      if (_isMounted) setIsLoading(false);
    }
  };

  useEffect(
    () => () => {
      setIsMounted(false);
    },
    []
  );

  return { isLoading, inputValues, schema, handleUpdateMyAccount };
};

export default useMyAccountUpdate;
