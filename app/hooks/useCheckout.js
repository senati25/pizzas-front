import { useEffect, useState } from 'react';
import OrderRepository from '../../api/OrderRepository';
import useSessionContext from './useSessionContext';
import useShoppingCartContext from './useShoppingCartContext';

const useCheckout = () => {
  const sessionContext = useSessionContext();
  const {
    shoppingCartProducts,
    refreshShoppingCart,
  } = useShoppingCartContext();

  const [isLoading, setIsLoading] = useState(false);
  const [_isMounted, setIsMounted] = useState(true);
  const handleCreateOrder = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (sessionContext?.session && sessionContext.session.isLoggedIn) {
      const details = shoppingCartProducts.map((product) => ({
        cantidad: product.cantidad,
        precio_unidad: product.variedades.find(
          ({ denominacion }) => denominacion === product.variedad
        ).precio,
        producto_id: product.id,
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
      });
      console.log(data);
    }

    refreshShoppingCart();
    if (_isMounted) setIsLoading(false);
  };

  useEffect(
    () => () => {
      setIsMounted(false);
    },
    []
  );

  return { handleCreateOrder, isLoading };
};

export default useCheckout;
