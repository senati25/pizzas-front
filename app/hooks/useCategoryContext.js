import { useContext } from 'react';
import categoryContext from '../context/categoryContext';
/**
 * @returns {{
 * categories: [],
 * setCategories: function,
 * refreshCategories: function }}
 */
const useCategoryContext = () => useContext(categoryContext);

export default useCategoryContext;
