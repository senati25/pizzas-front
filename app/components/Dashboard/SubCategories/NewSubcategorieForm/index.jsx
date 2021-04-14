import { useRouter } from 'next/router';
import React from 'react';
import useSubCategoriesForm from '../../../../hooks/useSubCategoriesForm';
import DashboardForm from '../../../shared/DashBoardForm';

const FormCreateSubCategorie = () => {
  const { handleChange, handleCreateSubCategory } = useSubCategoriesForm();
  const { back } = useRouter();
  return (
    <DashboardForm
      handleSubmit={handleCreateSubCategory}
      title="Crear nueva Subcategoria"
      onCancel={back}
    >
      <input
        type="text"
        name="denominacion"
        id="denominacion"
        placeholder="DENOMINACION"
        onChange={handleChange}
      />
      <input
        type="number"
        name="precio"
        id="precio"
        placeholder="PRECIO"
        min="0"
        onChange={handleChange}
      />
      {/* <input
        type="number"
        name="categoria_id"
        placeholder="CATEGORIA ID"
        onChange={handleChange}
      /> */}
    </DashboardForm>
  );
};

export default FormCreateSubCategorie;
