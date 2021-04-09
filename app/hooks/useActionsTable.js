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

  const editItem = (id) => {
    console.log(id);
  };

  return { editItem, deleteItem };
};

export default useActionsTable;
