import { useContext } from 'react';
import storeContext from '../context/storeContext';

const useStoreContext = () => {
  const { store, setStore } = useContext(storeContext);
  return {
    store,
    setStore,
  };
};

export default useStoreContext;
