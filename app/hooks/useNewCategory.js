import { useState } from 'react';
import ROUTES from '../helpers/constants';

const useNewCategory = (fetchCategories, handleShowNewCategoryForm) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({});

  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateNewCategory = async () => {
    setIsLoading(true);
    const response = await fetch(`${ROUTES.api}/dashboard/categoria`, {
      method: 'POST',
      body: JSON.stringify(inputValues),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (data) {
      setIsLoading(false);
      await fetchCategories();
      handleShowNewCategoryForm();
    } else {
      // TODO
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateNewCategory();
  };

  return { handleSubmit, handleOnChange, isLoading };
};

export default useNewCategory;
