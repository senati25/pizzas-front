import { useRouter } from 'next/router';
import { useEffect } from 'react';
import DashboardForm from '../../../shared/DashBoardForm';
import useProductsForm from '../../../../hooks/useProductsForm';
import useCategoryContext from '../../../../hooks/useCategoryContext';

const EditProductForm = () => {
  const { categories } = useCategoryContext();

  const {
    handleOnChange,
    handleSubmitEdit,
    inputValues,
    getDetalle,
  } = useProductsForm();

  const { query, back } = useRouter();

  useEffect(() => {
    getDetalle(query.id);
  }, [query]);

  return (
    <DashboardForm
      handleSubmit={handleSubmitEdit}
      title="Editar  producto"
      onCancel={back}
    >
      <input
        type="text"
        name="nombre"
        id="nombre"
        value={inputValues.nombre}
        placeholder="NOMBRE"
        required
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="img"
        id="img"
        required
        value={inputValues.img}
        placeholder="IMAGEN"
        onChange={handleOnChange}
      />

      <textarea
        className="textArea_Product"
        name="descripcion"
        value={inputValues.descripcion}
        id="descripcion"
        required
        placeholder="DESCRIPCION"
        onChange={handleOnChange}
      ></textarea>
      <select
        name="categoria_id"
        value={inputValues.categoria_id}
        onChange={handleOnChange}
        id="categoria"
        required
      >
        {categories.length
          ? categories.map((data) => (
              <option key={data.id} value={data.id}>
                {data.denominacion}
              </option>
            ))
          : undefined}
      </select>
      <select
        required
        name="estado"
        value={inputValues.estado}
        onChange={handleOnChange}
        id="estado"
      >
        <option value="activo">Activo</option>
        <option value="baja">Baja</option>
      </select>
    </DashboardForm>
  );
};
export default EditProductForm;
