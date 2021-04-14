import { useRouter } from 'next/router';
import DashboardForm from '../../../shared/DashBoardForm';
import useProducts from '../../../../hooks/useProducts';
import useFetchCategories from '../../../../hooks/useFetchCategories';

const CreateProductForm = () => {
  const { handleOnChange, handleSubmitCreate } = useProducts();
  const { categories } = useFetchCategories();

  const { back } = useRouter();

  return (
    <DashboardForm
      handleSubmit={handleSubmitCreate}
      title="  Crear Nuevo Producto   "
      onCancel={back}
    >
      <input
        type="text"
        name="nombre"
        id="nombre"
        required
        placeholder="NOMBRE"
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="img"
        id="img"
        required
        placeholder="IMAGEN"
        onChange={handleOnChange}
      />

      <textarea
        className="textArea_Product"
        name="descripcion"
        id="descripcion"
        required
        placeholder="DESCRIPCION"
        onChange={handleOnChange}
      ></textarea>
      <select
        name="categoria_id"
        required
        onChange={handleOnChange}
        id="categoria"
      >
        <option value="">---categoria---</option>
        {categories.length
          ? categories.map((data) => (
              <option key={data.id} value={data.id}>
                {data.denominacion}
              </option>
            ))
          : undefined}
      </select>
      <select
        name="estado"
        required
        onChange={handleOnChange}
        defaultValue=""
        id="estado"
      >
        <option value="">---estado---</option>
        <option value="activo">Activo</option>
        <option value="baja">Baja</option>
      </select>
    </DashboardForm>
  );
};
export default CreateProductForm;
