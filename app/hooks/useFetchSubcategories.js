import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ROUTES from '../helpers/constants';
import useStoreContext from './useStoreContext';

const useFetchSubcategories = () => {
  const { query, push } = useRouter();
  const [id, setId] = useState('');
  const { setStore } = useStoreContext();
  const [subcategories, setSubcategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSubCategories = async () => {
    if (id) {
      const response = await fetch(
        `${ROUTES.api}/dashboard/subcategoriaproductos/${id}`
      );
      const data = await response.json();

      if (data.length) {
        setIsLoading(false);
        setSubcategories([...data]);
      } else {
        setIsLoading(false);
      }
    }
  };

  const redirectToSubCategories = () => {
    push('/admin/categories');
  };

  const deleteItem = async (itemId) => {
    const response = await fetch(
      `${ROUTES.api}/dashboard/categoria/${itemId}`,
      {
        method: 'DELETE',
      }
    );

    const result = await response.json();

    if (result) {
      fetchSubCategories();
    }
  };

  const editItem = (values) => {
    push({
      pathname: `/admin/categories/subcategories/${values.id}`,
      query: values,
    });
  };

  useEffect(() => {
    if (query.id) {
      setId(query.id);
      fetchSubCategories();
      console.log({ query });
    }
  }, [query]);

  // useEffect(() => {
  //   if (query.id) {
  //     setId(query.id);
  //     console.log({ query });
  //   }
  // }, [query]);

  useEffect(() => {
    setStore((prevState) => ({
      ...prevState,
      subcategories,
    }));
  }, [subcategories]);

  return {
    subcategories,
    fetchSubCategories,
    redirectToSubCategories,
    isLoading,
    editItem,
    deleteItem,
  };
};

export default useFetchSubcategories;
