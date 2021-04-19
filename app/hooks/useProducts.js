import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import ProductRepository from '../../api/ProductRepository';

const useProducts = () => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await ProductRepository.getAll();
    if (data) {
      setProducts(data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const deleteItem = async (id) => {
    try {
      const { estado } = await ProductRepository.delete(id);

      if (estado === 'success') {
        await getProducts();
        Swal.fire(
          'Proceso dado de bajo',
          `Dado de baja correctamente ${id}`,
          'success'
        );
        getProducts();
      }
    } catch (e) {
      console.log(e);
      Swal.fire('Error', 'error', 'error');
    }
  };

  const editItem = (values) => {
    push({ pathname: `/admin/products/${values.id}`, query: values });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    setProducts,
    isLoading,
    getProducts,
    editItem,
    deleteItem,
  };
};

export default useProducts;
