import { useContext } from 'react';
import storeContext from '../context/storeContext';

/**
 * @returns {{ store: {}, setStore: function }}
 */
const useStoreContext = () => useContext(storeContext);
export default useStoreContext;
