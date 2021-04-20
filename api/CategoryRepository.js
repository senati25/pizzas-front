import ROUTES from '../app/helpers/constants';

const CategoryRepository = {
  getAll: async () => {
    const response = await fetch(`${ROUTES.api}/dashboard/categoria`);
    const data = await response.json();
    return data;
  },

  getById: async (id) => {
    const response = await fetch(`${ROUTES.api}/dashboard/categoria/${id}`);
    const data = await response.json();
    return data;
  },

  create: async (inputValues) => {
    const response = await fetch(`${ROUTES.api}/dashboard/categoria`, {
      method: 'POST',
      body: JSON.stringify(inputValues),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    return data;
  },

  update: async (inputValues) => {
    const response = await fetch(
      `${ROUTES.api}/dashboard/categoria/${inputValues.id}`,
      {
        method: 'PATCH',
        body: JSON.stringify(inputValues),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const data = await response.json();
    return data;
  },

  delete: async (id) => {
    const response = await fetch(
      `${ROUTES.api}/dashboard/categoria/baja/${id}`,
      {
        method: 'PATCH',
      }
    );
    const data = await response.json();

    return data;
  },
};

export default CategoryRepository;
