import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import ClientRepository from '../../api/ClientRepository';
import OrderRepository from '../../api/OrderRepository';
import useDashboardContext from './useDashboardContext';

const useCheckoutDashboard = () => {
  const router = useRouter();
  const { refreshData } = useDashboardContext();

  const [isLoading, setIsLoading] = useState(false);
  const [_isMounted, setIsMounted] = useState(true);
  const [message, setMessage] = useState('');

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleCreateOrder = async (e, formValues, shoppingCart) => {
    e.preventDefault();
    setIsLoading(true);

    // const { error, payload } = await ClientRepository.create({
    //   ...formValues,
    //   password: `${formValues.dni}drT`,
    // });

    // if (!error) {
    const details = shoppingCart.map((product) => ({
      cantidad: product.cantidad,
      precio_unidad: product.variedades.find(
        ({ denominacion }) => denominacion === product.variedad
      ).precio,
      producto_id: product.id,
      variedad: product.variedad,
    }));

    const data = await OrderRepository.create({
      // cliente_id: payload.id,
      cliente: formValues,
      tipo: 'presencial',
      detalles: details,
      mensaje: message,
    });

    console.log(data);

    if (!data.error) {
      await refreshData();
      router.push(`/dashboard/ventas/orders/${data.payload}`);
    }
    // }
    if (_isMounted) setIsLoading(false);
  };

  useEffect(
    () => () => {
      setIsMounted(false);
    },
    []
  );

  return { handleOnChange, handleCreateOrder, isLoading };
};

export default useCheckoutDashboard;
