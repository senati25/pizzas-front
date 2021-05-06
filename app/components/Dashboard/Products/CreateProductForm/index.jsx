import { useRouter } from 'next/router';
import { useState } from 'react';
import DashboardForm from '../../../shared/DashBoardForm';

import useDashboardContext from '../../../../hooks/useDashboardContext';
import useProducts from '../../../../hooks/useProducts';
import Varieties from './Varieties';

const CreateProductForm = () => {
  const { categories } = useDashboardContext();
  const { handleOnChange, handleSubmitCreate } = useProducts();
  const router = useRouter();

  const [varieties, setVarieties] = useState([]);

  return (
    <DashboardForm
      handleSubmit={(e) => {
        e.preventDefault();
        handleSubmitCreate(varieties);
      }}
      title="Crear Nuevo Producto"
      enctype="multipart/form-data"
      onCancel={router.back}
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
        defaultValue=""
      >
        <option value="">Selecciona una categoria</option>
        {categories &&
          categories.map((data) => (
            <option key={data.id} value={data.id}>
              {data.denominacion}
            </option>
          ))}
      </select>

      <Varieties varieties={varieties} setVarieties={setVarieties} />
    </DashboardForm>
  );
};
export default CreateProductForm;
