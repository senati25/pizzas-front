import { useRouter } from 'next/router';
import useCategory from '../../../../hooks/useCategory';
import DashboardForm from '../../../shared/DashBoardForm';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';
// import styles from './styles.module.css';

const NewCategoryForm = () => {
  const router = useRouter();
  const { isLoading, handleOnChange, handleCreateCategory } = useCategory();

  return (
    <>
      {!isLoading ? (
        <DashboardForm
          handleSubmit={handleCreateCategory}
          title="Crear nueva categoria"
          onCancel={() => {
            router.back();
          }}
        >
          <input
            onChange={handleOnChange}
            type="text"
            name="denominacion"
            id="denominacion"
            placeholder="Denominacion"
          />
        </DashboardForm>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default NewCategoryForm;
