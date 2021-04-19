import { useRouter } from 'next/router';
import { useState } from 'react';
import Swal from 'sweetalert2';
import ProductRepository from '../../api/ProductRepository';
import ROUTES from '../helpers/constants';

const useProductsForm = () => {
  const { back } = useRouter();
  const [inputValues, setInputValues] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
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
    back();
  };

  const getDetalle = async (id) => {
    if (id) {
      const response = await fetch(
        `https://inviaggio-api.vercel.app/api/index.php/api/dashboard/producto/${id}`
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

  const handleSubmitEdit = async (e) => {
    console.log(inputValues);
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

    back();
    // handleRedirectProducts();
  };

  return {
    isLoading,
    handleSubmitEdit,
    handleOnChange,
    inputValues,
    getDetalle,
    handleSubmitCreate,
  };
};

export default useProductsForm;
