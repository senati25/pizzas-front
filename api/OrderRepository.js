import ROUTES from '../app/helpers/constants';

const OrderRepository = {
  create: async (values) => {
    const response = await fetch(`${ROUTES.api}/dashboard/pedido`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  },

  getById: async (orderId) => {
    const response = await fetch(`${ROUTES.api}/dashboard/pedido/${orderId}`);

    const data = await response.json();
    return data;
  },
  assignDealer: async (userId, orderId) => {
    const response = await fetch(
      `${ROUTES.api}/dashboard/pedido/${orderId}/asignarRepartidor`,
      {
        method: 'PATCH',
        body: JSON.stringify({ userId }),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const data = await response.json();
    return data;
  },

  updateStatus: async (orderId, statusId) => {
    const response = await fetch(
      `${ROUTES.api}/dashboard/pedido/${orderId}/actualizarEstado`,
      {
        method: 'PATCH',
        body: JSON.stringify({ statusId }),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const data = await response.json();
    return data;
  },
};

export default OrderRepository;
