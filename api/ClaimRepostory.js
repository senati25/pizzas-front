import ROUTES from '../app/helpers/constants';

const ClaimRepostory = {
  getAll: async () => {
    const response = await fetch(`${ROUTES.api}/dashboard/reclamo`);
    const data = await response.json();
    return data;
  },

  getById: async (id) => {
    const response = await fetch(`${ROUTES.api}/dashboard/reclamo/${id}`);
    const data = await response.json();
    return data;
  },
  delete: async (id) => {
    const response = await fetch(`${ROUTES.api}/dashboard/reclamo/${id}`, {
      method: 'DELETE',
    });

    const data = await response.json();
    return data;
  },
};

export default ClaimRepostory;
