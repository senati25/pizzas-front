import { useState } from 'react';

import ROUTES from '../helpers/constants';
import useFetchCategories from './useFetchCategories';

const useCategory = () => {
  const { redirectToCategories } = useFetchCategories();
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({});

  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const createNewCategory = async () => {
    setIsLoading(true);
    const response = await fetch(`${ROUTES.api}/dashboard/categoria`, {
      method: 'POST',
      body: JSON.stringify(inputValues),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (data) {
      redirectToCategories();
      setIsLoading(false);
    } else {
      // TODO
      setIsLoading(false);
    }
  };

  const handleCreateNewCategory = (e) => {
    e.preventDefault();
    createNewCategory();
  };

  const editCategory = async () => {
    setIsLoading(true);
    const response = await fetch(
      `${ROUTES.api}/dashboard/categoria/${inputValues.id}`,
      {
        method: 'PATCH',
        body: JSON.stringify(inputValues),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const data = await response.json();

    if (data) {
      redirectToCategories();
      setIsLoading(false);
    } else {
      // TODO
      setIsLoading(false);
    }
  };

  const handleEditCategory = (e) => {
    e.preventDefault();
    editCategory();
  };

  return {
    handleCreateNewCategory,
    handleEditCategory,
    redirectToCategories,
    handleOnChange,
    isLoading,
    inputValues,
    setInputValues,
  };
};

export default useCategory;
