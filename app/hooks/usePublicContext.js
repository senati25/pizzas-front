import { useContext } from 'react';
import publicContext from '../context/publicContext';
/**
 * @returns {{ * products: [] }}
 */
const usePublicContext = () => useContext(publicContext);

export default usePublicContext;
