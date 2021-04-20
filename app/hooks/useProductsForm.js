import { useRouter } from 'next/router';
import { useState } from 'react';
import Swal from 'sweetalert2';
import ProductRepository from '../../api/ProductRepository';
import ROUTES from '../helpers/constants';

const useProductsForm = () => {
  const { back } = useRouter();

  const [isLoading, setIsLoading] = useState(true);

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
