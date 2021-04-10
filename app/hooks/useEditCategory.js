import { useState } from 'react';
import useCategories from './useFetchCategories';

const useEditCategory = () => {
  const { redirectToCategories } = useCategories();
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({});

  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditCategory();
  };

  return { handleOnChange, handleSubmit, redirectToCategories };
};

export default useEditCategory;
