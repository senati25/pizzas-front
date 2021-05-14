import { useState } from 'react';
import Swal from 'sweetalert2';
import router from 'next/router';
import ROUTES from '../helpers/constants';
import UserRepository from '../../api/UserRepository';
import useDashboardContext from './useDashboardContext';

const useUsers = () => {
  const { refreshUsers } = useDashboardContext();

  const [isLoading, setIsLoading] = useState(true);
  const [smsResponse, setSmsResponse] = useState('');
  const [inputValues, setInputValues] = useState({});
  const [roles, setRoles] = useState([]);

  const deleteItem = async (id) => {
    try {
      const data = await UserRepository.delete(id);

      if (!data.error) {
        await refreshUsers();
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
    if (id) {
      const data = await UserRepository.getById(id);
      console.log(data);
      if (data) {
        setInputValues(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = await UserRepository.update(inputValues);
    console.log({ data });
    if (data) {
      setIsLoading(false);
      await refreshUsers();
      Swal.fire('', 'Producto actualizado correctamente', 'success');
    } else {
      // TODO
      setIsLoading(false);
      Swal.fire('', 'No se a podido actualizar', 'info');
    }
    router.back();
  };

  const getRoles = async () => {
    setIsLoading(true);
    const response = await fetch(`${ROUTES.api}/dashboard/roles`);
    const data = await response.json();

    if (data) {
      setIsLoading(false);
      setRoles(data);
    } else {
      setIsLoading(false);
    }
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    console.log(inputValues);
    setIsLoading(true);
    const response = await fetch(
      `http://127.0.0.1:8000/api/dashboard/usuarios`,
      {
        method: 'POST',
        body: JSON.stringify(inputValues),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.estado === 'success') {
      setIsLoading(false);
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

  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    isLoading,
    deleteItem,
    handleSubmitEdit,
    handleSubmitCreate,
    inputValues,
    handleOnChange,
    roles,
    getRoles,
    getDetalle,
    smsResponse,
  };
};

export default useUsers;
