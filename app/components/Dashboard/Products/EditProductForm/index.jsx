import { useRouter } from 'next/router';
import { useEffect } from 'react';
import DashboardForm from '../../../shared/DashBoardForm';
import useDashboardContext from '../../../../hooks/useDashboardContext';
import useProducts from '../../../../hooks/useProducts';

const EditProductForm = () => {
  const { categories } = useDashboardContext();

  const {
    handleOnChange,
    handleSubmitEdit,
    inputValues,
    getDetalle,
  } = useProducts();

  const router = useRouter();

  useEffect(() => {
    getDetalle(router.query.id);
  }, [router.query]);

  return (
    <DashboardForm
      handleSubmit={handleSubmitEdit}
      title="Editar producto"
      onCancel={router.back}
    >
      <input
        type="text"
        name="nombre"
        id="nombre"
        defaultValue={inputValues.nombre}
        placeholder="NOMBRE"
        required
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="img"
        id="img"
        required
        defaultValue={inputValues.img}
        placeholder="IMAGEN"
        onChange={handleOnChange}
      />

      <textarea
        className="textArea_Product"
        name="descripcion"
        defaultValue={inputValues.descripcion}
        id="descripcion"
        required
        placeholder="DESCRIPCION"
        onChange={handleOnChange}
      ></textarea>
      <select
        name="categoria_id"
        defaultValue={inputValues.categoria_id}
        onChange={handleOnChange}
        id="categoria"
        required
      >
        {categories &&
          categories.map((data) => (
            <option key={data.id} value={data.id}>
              {data.denominacion}
            </option>
          ))}
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
