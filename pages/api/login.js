import ROUTES from '../../app/helpers/constants';
import fetcher from '../../lib/fetcher';
import withSession from '../../lib/withSession';

export default withSession(async (req, res) => {
  const { correo, password } = await req.body;

  try {
    const response = await fetcher(
      `${ROUTES.api}/dashboard/usuario/iniciar-sesion`,
      {
        method: 'POST',
        body: JSON.stringify({ correo, password }),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    let session = { isLoggedIn: false };
    if (response.error) {
      session = { ...session, message: response.message };
    } else {
      session = { isLoggedIn: true, ...response.user };
    }

    req.session.set('session', session);

    await req.session.save();

    res.json(session);
  } catch (error) {
    const { response: fetchResponse } = error;

    res.status(fetchResponse?.status || 500).json(error.data);
  }
});
