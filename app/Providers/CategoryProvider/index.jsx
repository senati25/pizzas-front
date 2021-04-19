import { array, object, oneOfType } from 'prop-types';
import { useEffect, useState } from 'react';
import CategoryRepository from '../../../api/CategoryRepository';
import categoryContext from '../../context/categoryContext';

const CategoryProvider = ({ children }) => {
  const [state, setState] = useState([]);

  const handleRefreshCategory = async () => {
    const data = await CategoryRepository.getAll();
    setState(data);
  };

  useEffect(() => {
    if (!state.length) {
      handleRefreshCategory();
    }
  }, []);

  return (
    <categoryContext.Provider
      value={{
        categories: state,
        setCategories: setState,
        refreshCategories: handleRefreshCategory,
      }}
    >
      {children}
    </categoryContext.Provider>
  );
};

CategoryProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
};

export default CategoryProvider;
