import React from 'react';
import useSubCategories from '../../../../hooks/useSubCategories';
import DashboardForm from '../../../shared/DashBoardForm';

const FormCreateSubCategorie = () => {
  const { handleChange, handleCreateSubCategory } = useSubCategories();

  return (
    <DashboardForm
      handleSubmit={handleCreateSubCategory}
      title="Crear nueva Subcategoria"
      onCancel={() => {
        alert('hola mundo en react');
      }}
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
      <input
        type="number"
        name="categoria_id"
        placeholder="CATEGORIA ID"
        onChange={handleChange}
      />
    </DashboardForm>
  );
};

export default FormCreateSubCategorie;
