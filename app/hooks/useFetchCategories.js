import router from 'next/router';
import { useEffect, useState } from 'react';
import ROUTES from '../helpers/constants';
import useStoreContext from './useStoreContext';

const useFetchCategories = () => {
  const { setStore } = useStoreContext();
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

  useEffect(() => {
    setStore((prevState) => ({
      ...prevState,
      categories,
    }));
  }, [categories]);

  return { categories, fetchCategories, redirectToCategories, isLoading };
};

export default useFetchCategories;
