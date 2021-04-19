import { useRouter } from 'next/router';
import { useState } from 'react';
import DashboardForm from '../../../shared/DashBoardForm';

import Varieties from './Varieties';
import useProductsForm from '../../../../hooks/useProductsForm';
import useCategoryContext from '../../../../hooks/useCategoryContext';

const CreateProductForm = () => {
  const { categories } = useCategoryContext();
  const { handleOnChange, handleSubmitCreate } = useProductsForm();
  const { back } = useRouter();

  const [varieties, setVarieties] = useState([]);

  return (
    <DashboardForm
      handleSubmit={(e) => {
        e.preventDefault();
        handleSubmitCreate(varieties);
      }}
      title="Crear Nuevo Producto"
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

      <Varieties varieties={varieties} setVarieties={setVarieties} />
    </DashboardForm>
  );
};
export default CreateProductForm;
