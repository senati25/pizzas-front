import { useEffect, useState } from 'react';
import OrderRepository from '../../api/OrderRepository';
import useDashboardContext from './useDashboardContext';
import useSessionDashboardContext from './useSessionDashboardContext';

const useOrders = () => {
  const { refreshData } = useDashboardContext();
  const [isLoading, setIsLoading] = useState({});
  const [_isMounted, setIsMounted] = useState(true);
  const { session } = useSessionDashboardContext();

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

  const assignDealer = async () => {
    const data = await OrderRepository.assignDealer(session?.id, order.id);
    console.log(data);
  };

  useEffect(
    () => () => {
      setIsMounted(false);
    },
    []
  );

  return {
    isLoading,
    getDetails,
    order,
    handleUpdateOrderStatus,
    assignDealer,
  };
};

export default useOrders;
