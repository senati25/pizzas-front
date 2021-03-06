import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DashboardForm from '../../../shared/DashBoardForm';
import useDashboardContext from '../../../../hooks/useDashboardContext';
import useProducts from '../../../../hooks/useProducts';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';
import Varieties from '../Varieties';

const EditProductForm = () => {
  const { administrador } = useDashboardContext();

  const {
    handleOnChange,
    handleSubmitEdit,
    isLoading,
    inputValues,
    getDetalle,
  } = useProducts();

  const router = useRouter();

  const [varieties, setVarieties] = useState(
    inputValues?.variedades ? inputValues?.variedades : []
  );

  useEffect(() => {
    getDetalle(router.query.id);
  }, [router.query]);

  useEffect(() => {
    setVarieties(inputValues?.variedades);
  }, [inputValues.variedades]);

  return !isLoading ? (
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
        value={inputValues.categoria_id}
        onChange={handleOnChange}
        // id="categoria"
        required
      >
        {administrador?.categories &&
          administrador?.categories.map((data) => (
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

      <Varieties varieties={varieties} setVarieties={setVarieties} />
    </DashboardForm>
  ) : (
    <SpinnerDashboard />
  );
};
export default EditProductForm;
