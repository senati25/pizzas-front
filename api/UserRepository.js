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
};

export default UserRepository;
