import ROUTES from '../../app/helpers/constants';
import fetcher from '../../lib/fetcher';
import { withSession } from '../../lib/withSession';

export default withSession(async (req, res) => {
  const { correo, password } = await req.body;

  try {
    const response = await fetcher(`${ROUTES.api}/publico/login`, {
      method: 'POST',
      body: JSON.stringify({ correo, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    let session = {};

    if (!response.error) {
      session = { isLoggedIn: true, ...response.user };
      req.session.set('session', session);
      await req.session.save();
      return res.json(session);
    }

    session = { isLoggedIn: false, ...response };
    req.session.set('session', session);
    await req.session.save();
    return res.json(session);
  } catch (error) {
    const { response: fetchResponse } = error;

    return res.status(fetchResponse?.status || 500).json(error.data);
  }
});
