import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useCategory from '../../../../hooks/useCategory';

import DashboardForm from '../../../shared/DashBoardForm';

const EditCategoryForm = () => {
  const {
    handleEditCategory,
    redirectToCategories,
    inputValues,
    setInputValues,
    handleOnChange,
  } = useCategory();

  const { query } = useRouter();

  useEffect(() => {
    setInputValues((prevState) => ({ ...prevState, ...query }));
  }, [query]);

  return (
    <DashboardForm
      handleSubmit={handleEditCategory}
      title="Edit Category"
      onCancel={redirectToCategories}
    >
      <input
        type="text"
        name="id"
        placeholder="id"
        defaultValue={inputValues.id}
        disabled
        onChange={handleOnChange}
      />

      <input
        type="text"
        name="denominacion"
        defaultValue={inputValues.denominacion}
        placeholder="Denominacion"
        onChange={handleOnChange}
      />
      <select
        name="estado"
        value={inputValues.estado}
        onChange={handleOnChange}
      >
        <option value="activo">activo</option>
        <option value="baja">baja</option>
      </select>
    </DashboardForm>
  );
};

export default EditCategoryForm;
