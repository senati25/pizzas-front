import { array, object, oneOfType } from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import ClientRepository from '../../../api/ClientRepository';
import OrdersContext from '../../context/OrdersContext';
import useSessionContext from '../../hooks/useSessionContext';

const OrdersProvider = ({ children }) => {
  const { session } = useSessionContext();
  const [state, setState] = useState({});

  const handleRefresh = async () => {
    const data = await ClientRepository.orders(session?.id);
    if (!data.error) setState(data.payload);
  };

  useEffect(() => {
    if (session?.isLoggedIn) {
      handleRefresh();
    }
  }, [session]);

  return (
    <OrdersContext.Provider
      value={{
        orders: state,
        refreshOrders: useCallback(() => handleRefresh(), []),
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

OrdersProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
};
export default OrdersProvider;
