import { useEffect, useState } from 'react';
import ROUTES from '../helpers/constants';
import useCategories from './useCategories';

const useNewCategory = () => {
  const { fetchCategories } = useCategories();
  const [isLoading, setisLoading] = useState(false);
  const [inputValues, setInputValues] = useState({});

  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateNewCategory = async () => {
    const response = await fetch(`${ROUTES.api}/dashboard/categoria`, {
      method: 'POST',
      body: JSON.stringify(inputValues),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (data) {
      await fetchCategories();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget.value);
    handleCreateNewCategory();
  };

  useEffect(() => {
    console.log(inputValues);
  }, [inputValues]);

  return { handleSubmit, handleOnChange };
};

export default useNewCategory;
