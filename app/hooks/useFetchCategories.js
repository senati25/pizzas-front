import router from 'next/router';
import { useEffect, useState } from 'react';
import ROUTES from '../helpers/constants';

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCategories = async () => {
    const response = await fetch(`${ROUTES.api}/dashboard/categoria`);
    const data = await response.json();

    if (data.length) {
      setIsLoading(false);
      setCategories([...data]);
    } else {
      setIsLoading(false);
    }
  };
  const redirectToCategories = () => {
    router.push('/admin/categories');
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, fetchCategories, redirectToCategories, isLoading };
};

export default useFetchCategories;
