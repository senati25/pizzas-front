import { useEffect, useState } from 'react';
import OrderRepository from '../../api/OrderRepository';
import useDashboardContext from './useDashboardContext';

const useOrders = () => {
  const { refreshData } = useDashboardContext();
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

  const handleUpdateOrderStatus = async (statusId) => {
    setIsLoading(true);
    const data = await OrderRepository.updateStatus(order.id, statusId);
    if (!data.error) {
      await refreshData();
      await getDetails(order.id);

      setIsLoading(false);
    }
  };

  useEffect(
    () => () => {
      setIsMounted(false);
    },
    []
  );

  return { isLoading, getDetails, order, handleUpdateOrderStatus };
};

export default useOrders;
