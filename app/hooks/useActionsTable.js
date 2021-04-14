import router from 'next/router';
import ROUTES from '../helpers/constants';
import useStoreContext from './useStoreContext';

const useActionsTable = (fetchCategories) => {
  const { setStore } = useStoreContext();
  const deleteItem = async (id) => {
    const response = await fetch(
      `${ROUTES.api}/dashboard/categoria/baja/${id}`,
      {
        method: 'PATCH',
      }
    );
    const result = await response.json();
    if (result) {
      fetchCategories();
    }
  };

  const editItem = (values) => {
    router.push({ pathname: `/admin/categories/${values.id}`, query: values });
  };

  const redirectToSubcategories = (values) => {
    setStore((prevState) => ({
      ...prevState,
      currentSubcategory: { ...values },
    }));

    // router.push({
    //   pathname: `/admin/categories/subcategories/${values.id}`,
    //   query: values,
    // });
    router.push(`/admin/categories/subcategories/${values.denominacion}`);
  };

  return { editItem, deleteItem, redirectToSubcategories };
};

export default useActionsTable;
