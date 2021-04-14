import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

const useProducts = () => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(
      'https://inviaggio-api.vercel.app/api/index.php/api/publico/productos'
    );
    const data = await response.json();

    if (data) {
      // console.log(`fetch`);
      setProducts([...data]);
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
          await getProducts();
          Swal.fire(
            'Proceso dado de bajo',
            `Dado de baja correctamente ${id}`,
            'success'
          );

          getProducts();
        }
      });
    } catch (e) {
      console.log(e);
      Swal.fire('Error', 'error', 'error');
    }
  };

  const editItem = (values) => {
    push({ pathname: `/admin/products/${values.id}`, query: values });
  };

  // const handleRedirectProducts = () => {
  //   router.push('/admin/products');
  // };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    isLoading,
    getProducts,
    editItem,
    deleteItem,
  };
};

export default useProducts;
