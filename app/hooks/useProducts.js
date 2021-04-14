import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import ROUTES from '../helpers/constants';

const useProducts = () => {
  const { back, push } = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [inputValues, setInputValues] = useState({});

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

  // const handleRedirectProducts = () => {
  //   router.push('/admin/products');
  // };

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
  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    console.log(inputValues);
    setIsLoading(true);
    const response = await fetch(`${ROUTES.api}/dashboard/producto`, {
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
    back();
    // handleRedirectProducts();
  };
  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    isLoading,
    getProducts,
    editItem,
    deleteItem,
    handleSubmitEdit,
    handleSubmitCreate,
    inputValues,
    // handleRedirectProducts,
    setInputValues,
    handleOnChange,
    getDetalle,
  };
};

export default useProducts;
