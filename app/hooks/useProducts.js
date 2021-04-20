import { useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import ProductRepository from '../../api/ProductRepository';
import useDashboardContext from './useDashboardContext';
import ROUTES from '../helpers/constants';

const useProducts = () => {
  const router = useRouter();
  const { refreshProducts } = useDashboardContext();

  const [inputValues, setInputValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDeleteProduct = async (id) => {
    try {
      const { estado } = await ProductRepository.delete(id);

      if (estado === 'success') {
        // await refreshProducts();
        await refreshProducts();
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
      const data = await ProductRepository.getById(id);

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
    const response = await fetch(
      `${ROUTES.api}/dashboard/producto/${inputValues.id}`,
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

    router.back();
  };

  const handleSubmitCreate = async (varieties) => {
    setIsLoading(true);
    const data = await ProductRepository.create(inputValues, varieties);
    if (data) {
      setIsLoading(false);
      Swal.fire('', 'Producto Creado correctamente', 'success');
    } else {
      // TODO
      setIsLoading(false);
      Swal.fire('', 'No se a podido crear el producto', 'info');
    }
    router.back();
  };

  return {
    isLoading,
    inputValues,
    getDetalle,
    handleSubmitCreate,
    handleSubmitEdit,
    handleOnChange,
    handleDeleteProduct,
  };
};

export default useProducts;
