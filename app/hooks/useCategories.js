import { useEffect, useState } from 'react';
import ROUTES from '../helpers/constants';

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await fetch(`${ROUTES.api}/dashboard/categoria`);
    const data = await response.json();
    if (data.length) {
      setCategories([...data]);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, fetchCategories };
};

export default useCategories;
