import { useEffect, useState } from 'react';
import OrderRepository from '../../api/OrderRepository';

const useOrders = () => {
  const [isLoading, setIsLoading] = useState({});
  const [_isMounted, setIsMounted] = useState(true);

  const [order, setOrder] = useState({});

  const getDetails = async (orderId) => {
    setIsLoading(true);
    const data = await OrderRepository.getById(orderId);
    if (!data.error && _isMounted) {
      setOrder(data.payload);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(
    () => () => {
      setIsMounted(false);
    },
    []
  );

  return { isLoading, getDetails, order };
};

export default useOrders;
