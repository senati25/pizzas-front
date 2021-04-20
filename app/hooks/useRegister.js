import { useRouter } from 'next/router';
import { useState } from 'react';
import Swal from 'sweetalert2';
import ClientRepository from '../../api/ClientRepository';

const useRegister = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [smsResponse, setSmsResponse] = useState('');
  const [inputValues, setInputValues] = useState({});

  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitCreateCliente = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const data = await ClientRepository.create(inputValues);

    if (data.estado === 'success') {
      setIsLoading(false);
      Swal.fire('Tu cuenta a sido creada con exito', '', 'success');
      router.push('/login');
    } else if (data.estado === 'correoexiste') {
      const sms = `El correo ${inputValues.correo} ya esta registrado`;
      setSmsResponse(sms);

      setIsLoading(false);
    } else {
      const sms = `Tenemos problemas al crear tu cuenta intentalo mas tarde`;
      setSmsResponse(sms);
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    smsResponse,
    handleSubmitCreateCliente,
    handleOnChange,
  };
};

export default useRegister;
