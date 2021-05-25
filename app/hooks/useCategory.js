import { useState } from 'react';
import router from 'next/router';
import useDashboardContext from './useDashboardContext';
import CategoryRepository from '../../api/CategoryRepository';

const useCategory = () => {
  const { refreshData } = useDashboardContext();
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
      await refreshData();
      router.push('/dashboard/administrador/categories');
      setIsLoading(false);
    } else {
      // TODO
      setIsLoading(false);
    }
  };

  const handleGetDetails = async (id) => {
    setIsLoading(true);

    const data = await CategoryRepository.getById(id);

    if (data) {
      setIsLoading(false);
      setInputValues(data);
    } else {
      console.log(data);
      setIsLoading(false);
    }
  };

  const handleDeleteCategory = async (id) => {
    const result = await CategoryRepository.delete(id);
    if (result) {
      refreshData();
    }
  };

  const handleUpdateCategory = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const data = await CategoryRepository.update(inputValues);

    if (data) {
      await refreshData();
      setIsLoading(false);
      router.push('/dashboard/administrador/categories');
    } else {
      // TODO
      setIsLoading(false);
    }
  };

  return {
    inputValues,
    isLoading,
    handleOnChange,
    handleGetDetails,
    handleCreateCategory,
    handleUpdateCategory,
    handleDeleteCategory,
  };
};

export default useCategory;
