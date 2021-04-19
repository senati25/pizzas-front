import ROUTES from '../app/helpers/constants';

const ProductRepository = {
  getAll: async () => {
    const response = await fetch(`${ROUTES.api}/publico/productos`);
    const data = await response.json();
    console.log(data);
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
