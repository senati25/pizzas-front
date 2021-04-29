import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import ClientRepository from '../../api/ClientRepository';

const useRegister = () => {
  const router = useRouter();

  const [_isMounted, setIsMounted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    dni: '',
    direccion: '',
    password: '',
    confirmPassword: '',
  });

  const schema = Yup.object({
    nombre: Yup.string()
      .trim()
      .min(1, '*Debe contener minimo 1 caracter')
      .max(50, '*Debe contener 50 caracteres o menos')
      .ensure()
      .required('*Requerido'),
    apellido: Yup.string()
      .trim()
      .min(1, '*Debe contener minimo 1 caracter')
      .max(50, '*Debe contener 50 caracteres o menos')
      .ensure()
      .required('*Requerido'),
    correo: Yup.string()
      .trim()
      .lowercase()
      .email('*El correo es invalido')
      .required('*Email es requerido'),
    dni: Yup.number()
      .max(99999999, '*Debe contener 8 caracteres')
      .required('*Requerido'),
    direccion: Yup.string()
      .max(100, '*Debe contener maximo 100 caracteres')
      .required('*Requerido'),
    password: Yup.string()
      .trim()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        '*La contraseña debe contener minimo 8 caracteres, una minuscula, una mayuscula y un número'
      )
      .required('*Contraseña es requerido'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], '*La contraseña no coincide')
      .required('*Confirmar contraseña es requerido'),
  });

  const handleSubmitCreateCliente = async (values) => {
    setInputValues(values);
    setIsLoading(true);

    const data = await ClientRepository.create(values);

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

      router.push('/login');
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

  return {
    isLoading,
    inputValues,
    schema,
    handleSubmitCreateCliente,
  };
};

export default useRegister;
