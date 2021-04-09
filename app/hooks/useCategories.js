import { useEffect, useState } from 'react';
import ROUTES from '../helpers/constants';
import useStoreContext from './useStoreContext';

const useCategories = () => {
  const { setStore } = useStoreContext();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    setIsLoading(true);
    const response = await fetch(`${ROUTES.api}/dashboard/categoria`);
    const data = await response.json();

    if (data.length) {
      setIsLoading(false);
      setCategories([...data]);
      setStore((prevState) => ({
        ...prevState,
        categories: { value: categories, setCategories },
      }));
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, fetchCategories, isLoading };
};

export default useCategories;
