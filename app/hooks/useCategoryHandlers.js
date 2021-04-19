import router from 'next/router';
import { useState } from 'react';
import CategoryRepository from '../../api/CategoryRepository';
import useCategoryContext from './useCategoryContext';

const useCategoryHandlers = () => {
  const { refreshCategories } = useCategoryContext();
  const [inputValues, setInputValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = await CategoryRepository.create(inputValues);

    if (data) {
      await refreshCategories();
      router.push('/admin/categories');
      setIsLoading(false);
    } else {
      // TODO
      setIsLoading(false);
    }
  };

  const handleDeleteCategory = async (id) => {
    const result = await CategoryRepository.delete(id);
    if (result) {
      refreshCategories();
    }
  };

  const handleUpdateCategory = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const data = await CategoryRepository.update(inputValues);

    if (data) {
      await refreshCategories();
      setIsLoading(false);
      router.push('/admin/categories');
    } else {
      // TODO
      setIsLoading(false);
    }
  };

  return {
    inputValues,
    setInputValues,
    isLoading,
    handleOnChange,
    handleCreateCategory,
    handleUpdateCategory,
    handleDeleteCategory,
  };
};

export default useCategoryHandlers;
