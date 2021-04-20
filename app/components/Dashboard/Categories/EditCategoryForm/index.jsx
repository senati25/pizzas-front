import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useCategoryHandlers from '../../../../hooks/useCategoryHandlers';
import DashboardForm from '../../../shared/DashBoardForm';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';

const EditCategoryForm = () => {
  const router = useRouter();
  const {
    isLoading,
    setInputValues,
    inputValues,
    handleOnChange,
    handleUpdateCategory,
  } = useCategoryHandlers();

  useEffect(() => {
    setInputValues((prevState) => ({ ...prevState, ...router.query }));
  }, [router.query]);

  return (
    <div>
      {!isLoading ? (
        <DashboardForm
          handleSubmit={handleUpdateCategory}
          title="Edit Category"
          onCancel={() => {
            router.back();
          }}
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
          <select
            name="estado"
            value={inputValues.estado}
            onChange={handleOnChange}
          >
            <option value="activo">activo</option>
            <option value="baja">baja</option>
          </select>
        </DashboardForm>
      ) : (
        <SpinnerDashboard />
      )}
    </div>
  );
};

export default EditCategoryForm;
