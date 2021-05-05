import ROUTES from '../app/helpers/constants';

const OrderRepository = {
  create: async (values) => {
    console.log({ values });
    const response = await fetch(`${ROUTES.api}/dashboard/pedido`, {
      method: 'POST',
      body: JSON.stringify(values),
      //   headers: { 'Content-Type': 'application/json' },
    });

    console.log({ response });
    const data = await response.json();
    return data;
  },
};

export default OrderRepository;
