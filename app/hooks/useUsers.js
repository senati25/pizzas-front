import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import router from 'next/router';
import ROUTES from '../helpers/constants';

const useUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [smsResponse, setSmsResponse] = useState('');
  const [inputValues, setInputValues] = useState({});
  const [roles, setRoles] = useState([]);

  const getUsers = async () => {
    const response = await fetch(`${ROUTES.api}/dashboard/usuarios`);
    const data = await response.json();
    console.log(data);
    if (data) {
      // console.log(`fetch`);
      setUsers([...data.payload]);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const deleteItem = async (id) => {
    try {
      fetch(
        `https://inviaggio-api.vercel.app/api/index.php/api/dashboard/usuarios/${id}`,
        { method: 'DELETE' }
      ).then(async (data) => {
        if (data.status === 200) {
          await getUsers();
          Swal.fire(
            'Proceso dado de bajo',
            `Dado de baja correctamente ${id}`,
            'success'
          );

          getUsers();
        }
      });
    } catch (e) {
      console.log(e);
      Swal.fire('Error', 'error', 'error');
    }
  };

  const editItem = (values) => {
    router.push({ pathname: `/admin/users/${values.id}`, query: values });
  };

  const getDetalle = async (id) => {
    if (id) {
      const response = await fetch(
        `https://inviaggio-api.vercel.app/api/index.php/api/dashboard/usuarios/${id}`
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        setInputValues(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }
  };
  const handleRedirectClients = () => {
    router.push('/admin/users');
  };
  const handleSubmitEdit = async (e) => {
    console.log(inputValues);
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch(
      `${ROUTES.api}/dashboard/usuarios/${inputValues.id}`,
      {
        method: 'PATCH',
        body: JSON.stringify(inputValues),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const data = await response.json();

    if (data) {
      setIsLoading(false);
      Swal.fire('', 'Producto actualizado correctamente', 'success');
    } else {
      // TODO
      setIsLoading(false);
      Swal.fire('', 'No se a podido actualizar', 'info');
    }
    handleRedirectClients();
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
      handleRedirectClients();
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

  useEffect(() => {
    getUsers();
  }, []);

  return {
    users,
    isLoading,
    getUsers,
    editItem,
    deleteItem,
    handleSubmitEdit,
    handleSubmitCreate,
    inputValues,
    handleRedirectClients,
    setInputValues,
    handleOnChange,
    roles,
    getRoles,
    getDetalle,
    smsResponse,
  };
};

export default useUsers;
