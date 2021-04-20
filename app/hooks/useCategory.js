import { useRouter } from 'next/router';
import { useState } from 'react';
import CategoryRepository from '../../api/CategoryRepository';

const useCategory = () => {
  const router = useRouter();
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
    const data = await CategoryRepository.create(inputValues);

    if (data) {
      router.push('/admin/categories');
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
    const data = await CategoryRepository.update(inputValues);

    if (data) {
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
    handleOnChange,
    isLoading,
    inputValues,
    setInputValues,
  };
};

export default useCategory;
