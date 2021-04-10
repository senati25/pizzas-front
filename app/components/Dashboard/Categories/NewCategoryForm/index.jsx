import useCategory from '../../../../hooks/useCategory';
import DashboardForm from '../../../shared/DashBoardForm';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';
// import styles from './styles.module.css';

const NewCategoryForm = () => {
  const {
    handleCreateNewCategory,
    redirectToCategories,
    handleOnChange,
    isLoading,
  } = useCategory();
  return (
    <>
      {!isLoading ? (
        <DashboardForm
          handleSubmit={handleCreateNewCategory}
          title="Crear nueva categoria"
          onCancel={redirectToCategories}
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
