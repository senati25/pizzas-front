import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useSubCategories from '../../../../hooks/useSubCategories';

import DashboardForm from '../../../shared/DashBoardForm';

const EditSubCategoryForm = () => {
  const {
    redirectToSubCategories,
    inputValues,
    setInputValues,
    handleOnChange,
    handleEditSubCategory,
  } = useSubCategories();

  const { query } = useRouter();

  useEffect(() => {
    setInputValues((prevState) => ({ ...prevState, ...query }));
  }, [query]);

  return (
    <DashboardForm
      handleSubmit={handleEditSubCategory}
      title="Editar Subcategoria"
      onCancel={redirectToSubCategories}
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

      <input
        type="number"
        name="precio"
        defaultValue={inputValues.precio}
        onChange={handleOnChange}
      />

      {/* <select
        name="estado"
        value={inputValues.estado}
        onChange={handleOnChange}
      >
        <option value="activo">activo</option>
        <option value="baja">baja</option>
      </select> */}
    </DashboardForm>
  );
};

export default EditSubCategoryForm;
