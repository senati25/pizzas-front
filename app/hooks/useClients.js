import { useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import useDashboardContext from './useDashboardContext';
import ClientRepository from '../../api/ClientRepository';

const useClients = () => {
  const router = useRouter();
  const { refreshClients } = useDashboardContext();

  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({});
  const [smsResponse, setSmsResponse] = useState('');

  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDeleteClient = async (id) => {
    try {
      const data = await ClientRepository.delete(id);
      if (data.estado === 'success') {
        await refreshClients();
        Swal.fire(
          'Proceso dado de bajo',
          `Dado de baja correctamente ${id}`,
          'success'
        );
      }
    } catch (e) {
      console.log(e);
      Swal.fire('Error', 'error', 'error');
    }
  };

  const getDetalle = async (id) => {
    const data = await ClientRepository.getById(id);

    if (data) {
      setInputValues(data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = await ClientRepository.update(inputValues);

    if (data) {
      await refreshClients();
      setIsLoading(false);
      Swal.fire('', 'Producto actualizado correctamente', 'success');
    } else {
      setIsLoading(false);
      Swal.fire('', 'No se a podido actualizar', 'info');
    }
    router.back();
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = await ClientRepository.create(inputValues);

    if (data.estado === 'success') {
      setIsLoading(false);
      await refreshClients();
      Swal.fire('Tu cuenta a sido creada con exito', '', 'success');
      router.back();
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
    inputValues,
    setInputValues,
    handleDeleteClient,
    handleSubmitEdit,
    handleOnChange,
    getDetalle,
    handleSubmitCreate,
    smsResponse,
  };
};

export default useClients;
