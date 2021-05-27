import { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { orderReducer, initialState, actionType } from './orderReducer';

const OrderStateContext = createContext({});

const useOrderState = () => {
  const context = useContext(OrderStateContext);
  if (!context) {
    throw new Error('useOrderState must be used with a OrderStateContext');
  }
  return context;
};

const OrderStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  const value = { state, dispatch, actionType };

  useEffect(() => {
    console.log({ state });
  }, [state]);

  return (
    <OrderStateContext.Provider value={value}>
      {children}
    </OrderStateContext.Provider>
  );
};

OrderStateProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node.isRequired]).isRequired,
};

export { OrderStateProvider, useOrderState };
