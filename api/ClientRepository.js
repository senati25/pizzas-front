import ROUTES from '../app/helpers/constants';

const ClientRepository = {
  getAll: async () => {
    const response = await fetch(`${ROUTES.api}/dashboard/cliente`);
    const data = await response.json();

    return data;
  },

  getById: async (id) => {
    const response = await fetch(`${ROUTES.api}/dashboard/cliente/${id}`);

    const data = await response.json();
    return data;
  },

  create: async (inputValues) => {
    const response = await fetch(`${ROUTES.api}/dashboard/cliente`, {
      method: 'POST',
      body: JSON.stringify(inputValues),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();

    return data;
  },

  update: async (inputValues) => {
    const response = await fetch(
      `${ROUTES.api}/dashboard/cliente/${inputValues.id}`,
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
    const response = await fetch(`${ROUTES.api}/dashboard/cliente/${id}`, {
      method: 'DELETE',
    });

    const data = await response.json();
    return data;
  },
};

export default ClientRepository;
