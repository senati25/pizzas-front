import ROUTES from '../app/helpers/constants';

const ProductRepository = {
  getAll: async () => {
    const response = await fetch(`${ROUTES.api}/publico/productos`);
    const data = await response.json();
    return data;
  },

  getById: async (id) => {
    const response = await fetch(`${ROUTES.api}/dashboard/producto/${id}`);
    const data = await response.json();
    return data;
  },

  create: async (inputValues, varieties) => {
    const response = await fetch(`${ROUTES.api}/dashboard/producto`, {
      method: 'POST',
      body: JSON.stringify({
        ...inputValues,
        variedades: JSON.stringify(varieties),
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    return data;
  },

  update: async (inputValues) => {
    const response = await fetch(
      `${ROUTES.api}/dashboard/producto/${inputValues.id}`,
      {
        method: 'PATCH',
        body: JSON.stringify(inputValues),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const data = await response.json();
    return data;
  },

  delete: async (productId) => {
    const response = await fetch(
      `${ROUTES.api}/dashboard/producto/baja/${productId}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const data = await response.json();

    return data;
  },
};

export default ProductRepository;
