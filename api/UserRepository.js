import ROUTES from '../app/helpers/constants';

const UserRepository = {
  login: async ({ email, password }) => {
    const response = await fetch(
      `${ROUTES.api}/dashboard/usuario/iniciar-sesion`,
      {
        method: 'POST',
        body: JSON.stringify({ correo: email, password }),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const data = await response.json();
    return data;
  },

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
};

export default UserRepository;
