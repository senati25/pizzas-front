import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import router from 'next/router';
import ROUTES from '../helpers/constants';

const useClients = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [clients, setClients] = useState([]);
  const [inputValues, setInputValues] = useState({});

  const getClients = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/dashboard/cliente');
    const data = await response.json();

    if (data) {
      // console.log(`fetch`);
      setClients([...data]);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const deleteItem = async (id) => {
    try {
      fetch(
        `https://inviaggio-api.vercel.app/api/index.php/api/dashboard/producto/baja/${id}`,
        { method: 'PATCH' }
      ).then(async (data) => {
        if (data.status === 200) {
          await getClients();
          Swal.fire(
            'Proceso dado de bajo',
            `Dado de baja correctamente ${id}`,
            'success'
          );

          getClients();
        }
      });
    } catch (e) {
      console.log(e);
      Swal.fire('Error', 'error', 'error');
    }
  };

  const editItem = (values) => {
    router.push({ pathname: `/admin/cliente/${values.id}`, query: values });
  };

  const getDetalle = async (id) => {
    if (id) {
      const response = await fetch(
        `https://inviaggio-api.vercel.app/api/index.php/api/dashboard/cliente/${id}`
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
    router.push('/admin/clients');
  };
  const handleSubmitEdit = async (e) => {
    console.log(inputValues);
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch(
      `${ROUTES.api}/dashboard/cliente/${inputValues.id}`,
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
  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    console.log(inputValues);
    setIsLoading(true);
    const response = await fetch(`${ROUTES.api}/dashboard/cliente`, {
      method: 'POST',
      body: JSON.stringify(inputValues),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();

    if (data) {
      setIsLoading(false);
      Swal.fire('', 'Producto Creado correctamente', 'success');
    } else {
      // TODO
      setIsLoading(false);
      Swal.fire('', 'No se a podido crear el producto', 'info');
    }
    handleRedirectClients();
  };
  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    getClients();
  }, []);

  return {
    clients,
    isLoading,
    getClients,
    editItem,
    deleteItem,
    handleSubmitEdit,
    handleSubmitCreate,
    inputValues,
    handleRedirectClients,
    setInputValues,
    handleOnChange,
    getDetalle,
  };
};

export default useClients;
