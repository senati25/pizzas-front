import { useState } from 'react';
import router from 'next/router';
import ROUTES from '../helpers/constants';

const useSubCategories = () => {
  const [subCategories, setSubCategorie] = useState({});
  const [responseCreate, setResponseCreate] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({});

  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchSubCategories = async () => {
    const response = await fetch(
      `${ROUTES.api}/dashboard/subcategoriaproductos`
    );
    const data = await response.json();
    if (data.length) {
      setSubCategorie([...data]);
    }
  };

  const createSubCategory = async () => {
    const response = await fetch(
      `${ROUTES.api}/dashboard/subcategoriaproductos`,
      {
        method: 'POST',
        body: JSON.stringify(inputValues),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const res = await response.json();
    if (res) {
      setResponseCreate(res);
    }
    console.log(responseCreate);
  };
  const handleChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const redirectToSubCategories = () => {
    router.back();
  };

  const editSubCategory = async () => {
    console.log(inputValues.id);
    setIsLoading(true);
    const response = await fetch(
      `${ROUTES.api}/dashboard/subcategoriaproductos/${inputValues.id}`,
      {
        method: 'PATCH',
        body: JSON.stringify(inputValues),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const data = await response.json();

    if (data) {
      redirectToSubCategories();
      setIsLoading(false);
    } else {
      // TODO
      setIsLoading(false);
    }
  };

  const handleEditSubCategory = (e) => {
    e.preventDefault();
    editSubCategory();
  };

  const handleCreateSubCategory = (e) => {
    e.preventDefault();
    createSubCategory();
  };

  return {
    subCategories,
    fetchSubCategories,
    responseCreate,
    createSubCategory,
    handleChange,
    handleCreateSubCategory,
    handleEditSubCategory,
    setInputValues,
    inputValues,
    isLoading,
    redirectToSubCategories,
    handleOnChange,
  };
};
export default useSubCategories;
