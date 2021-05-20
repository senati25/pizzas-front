import { useContext } from 'react';
import PublicContext from '../context/PublicContext';

/**
 * @returns {{
 * products: {},
 * categories: [],
 * refreshProducts: function,
 */
const usePublicContext = () => useContext(PublicContext);

export default usePublicContext;
