import { useRouter } from 'next/router';
import { useState } from 'react';
import DashboardForm from '../../../shared/DashBoardForm';

import useDashboardContext from '../../../../hooks/useDashboardContext';
import useProducts from '../../../../hooks/useProducts';
import Varieties from '../Varieties';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';
import ContentLayout from '../../../shared/ContentLayout';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';

const CreateProductForm = () => {
  const { categories } = useDashboardContext();
  const { handleOnChange, handleSubmitCreate, isLoading } = useProducts();
  const router = useRouter();

  const [varieties, setVarieties] = useState([]);

  if (isLoading) return <SpinnerDashboard />;

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Crear Nuevo Producto" />
      <DashboardForm
        handleSubmit={(e) => {
          e.preventDefault();
          handleSubmitCreate(varieties);
        }}
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
    </ContentLayout>
  );
};
export default CreateProductForm;
