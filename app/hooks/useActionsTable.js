import router from 'next/router';
import ROUTES from '../helpers/constants';

const useActionsTable = (fetchCategories) => {
  const deleteItem = async (id) => {
    const response = await fetch(`${ROUTES.api}/dashboard/categoria/${id}`, {
      method: 'DELETE',
    });

    const result = await response.json();

    if (result) {
      console.log({ result });
      fetchCategories();
    }
  };

  const editItem = (values) => {
    router.push({ pathname: `/admin/categories/${values.id}`, query: values });
  };

  const redirectToSubcategories = (values) => {
    router.push({
      pathname: `/admin/categories/subcategories/${values.id}`,
      query: values,
    });
  };

  return { editItem, deleteItem, redirectToSubcategories };
};

export default useActionsTable;
