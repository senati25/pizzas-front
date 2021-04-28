import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useState } from 'react';
import Swal from 'sweetalert2';
import ClientRepository from '../../api/ClientRepository';

const useRegister = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setinputValues] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    dni: '',
    direccion: '',
    password: '',
    confirmPassword: '',
  });
  const [smsResponse, setSmsResponse] = useState('');

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

  const handleSubmitCreateCliente = async (values, event) => {
    // event.preventDefault();
    console.log(values);
    setinputValues(values);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // const data = await ClientRepository.create(values);

    // if (data.estado === 'success') {
    //   setIsLoading(false);
    //   Swal.fire('Tu cuenta a sido creada con exito', '', 'success');
    //   router.push('/login');
    // } else if (data.estado === 'correoexiste') {
    // const sms = `El correo ${inputValues.correo} ya esta registrado`;
    // setSmsResponse(sms);

    //   setIsLoading(false);
    // } else {
    //   const sms = `Tenemos problemas al crear tu cuenta intentalo mas tarde`;
    //   setSmsResponse(sms);
    //   setIsLoading(false);
    // }
  };
  return {
    isLoading,
    inputValues,
    schema,
    smsResponse,
    handleSubmitCreateCliente,
  };
};

export default useRegister;
