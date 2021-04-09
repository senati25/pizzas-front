// import { useRouter } from 'next/router';
// import ROUTES from '../../../helpers/constants';
import { useState } from 'react';

import useCategories from '../../../hooks/useCategories';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import CategoryTable from './CategoryTable';
import NewCategoryForm from './NewCategoryForm';

// const celllllll = ({ cell }) => {
//   const id = cell.row.values.id;
//   return (
//     <>
//       <button type="button">Editar</button>
//       <button type="button">Eliminar</button>
//     </>
//   );
// };

const Categories = () => {
  const { categories, fetchCategories, isLoading } = useCategories();
  const [showNewCategoryForm, setShowNewCategoryForm] = useState(false);

  const handleShowNewCategoryForm = () => {
    setShowNewCategoryForm(!showNewCategoryForm);
  };

  return (
    <>
      {!isLoading ? (
        <div>
          {!showNewCategoryForm ? (
            <>
              <button type="button" onClick={handleShowNewCategoryForm}>
                Nuevo
              </button>
              <h1>Categorias</h1>
              <CategoryTable
                categories={categories}
                fetchCategories={fetchCategories}
              />
            </>
          ) : (
            <NewCategoryForm
              handleShowNewCategoryForm={handleShowNewCategoryForm}
              fetchCategories={fetchCategories}
            />
          )}
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default Categories;
