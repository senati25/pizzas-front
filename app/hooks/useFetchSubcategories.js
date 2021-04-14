import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ROUTES from '../helpers/constants';
import useStoreContext from './useStoreContext';

const useFetchSubcategories = () => {
  const { push, back } = useRouter();
  const { store } = useStoreContext();
  const [currentSubcategory] = useState(
    () => store?.currentSubcategory || null
  );

  const [_isMounted, setIsMounted] = useState(true);
  const [subcategories, setSubcategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSubCategories = async () => {
    const response = await fetch(
      `${ROUTES.api}/dashboard/subcategoriaproductos/${currentSubcategory.id}`
    );
    const data = await response.json();

    if (data.length && _isMounted) {
      setIsLoading(false);
      setSubcategories([...data]);
    } else if (_isMounted) {
      setIsLoading(false);
    }
  };

  const deleteItem = async (itemId) => {
    const response = await fetch(
      `${ROUTES.api}/dashboard/subcategoriaproductos/${itemId}`,
      {
        method: 'DELETE',
      }
    );

    const result = await response.json();

    if (result && _isMounted) {
      fetchSubCategories();
    }
  };

  const editItem = (values) => {
    push({
      pathname: `/admin/categories/subcategories/edit`,
      query: values,
    });
  };

  useEffect(() => {
    if (!currentSubcategory) {
      back();
    }
    fetchSubCategories();
    return () => {
      setIsMounted(false);
    };
  }, [currentSubcategory]);

  return {
    currentSubcategory,
    subcategories,
    isLoading,
    editItem,
    deleteItem,
  };
};

export default useFetchSubcategories;
