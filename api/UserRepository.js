import ROUTES from '../app/helpers/constants';

const UserRepository = {
  getAll: async () => {
    const response = await fetch(`${ROUTES.api}/dashboard/usuarios`);
    const data = await response.json();
    return data;
  },

  getById: async (id) => {
    const response = await fetch(`${ROUTES.api}/dashboard/usuarios/${id}`);

    const data = await response.json();
    return data;
  },

  update: async (inputValues) => {
    const response = await fetch(
      `${ROUTES.api}/dashboard/usuarios/${inputValues.id}`,
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
    const response = await fetch(`${ROUTES.api}/dashboard/usuarios/${id}`, {
      method: 'DELETE',
    });

    const data = await response.json();
    return data;
  },

  sectionData: async (rol) => {
    const response = await fetch(`${ROUTES.api}/dashboard/info/${rol}`, {
      method: 'get',
    });

    const data = await response.json();
    return data;
  },
};

export default UserRepository;
