import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import OrderRepository from '../../api/OrderRepository';
import useOrdersContext from './useOrdersContext';
import useSessionContext from './useSessionContext';
import useShoppingCartContext from './useShoppingCartContext';

const useCheckout = () => {
  const router = useRouter();
  const sessionContext = useSessionContext();
  const {
    shoppingCartProducts,
    refreshShoppingCart,
  } = useShoppingCartContext();
  const { refreshOrders } = useOrdersContext();

  const [isLoading, setIsLoading] = useState(false);
  const [_isMounted, setIsMounted] = useState(true);
  const [message, setMessage] = useState('');

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleCreateOrder = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (sessionContext?.session && sessionContext.session.isLoggedIn) {
      const details = shoppingCartProducts.map((product) => ({
        cantidad: product.cantidad,
        precio_unidad: product.variedades.find(
          ({ denominacion }) => denominacion === product.variedad
        ).precio,
        producto_id: product.producto_id,
        variedad: product.variedad,
      }));

      const {
        session: { id, carrito_id: carritoId },
      } = sessionContext;
      console.log(`autenticated`);

      const data = await OrderRepository.create({
        cliente_id: id,
        carrito_id: carritoId,
        tipo: 'web',
        detalles: details,
        mensaje: message,
      });
      console.log(data);
      if (!data.error) {
        await refreshOrders();
        await refreshShoppingCart();
        router.push(`/account/orders`);
      }
    }

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

export default useCheckout;
