import ROUTES from '../../app/helpers/constants';
import fetcher from '../../lib/fetcher';
import { withSession } from '../../lib/withSession';

export default withSession(async (req, res) => {
  const { userId, values } = await req.body;

  try {
    const response = await fetcher(`${ROUTES.api}/publico/cliente/${userId}`, {
      method: 'PATCH',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    });

    const session = req.session.get('session');

    if (!response.error) {
      req.session.set('session', { ...session, ...response.payload });
      await req.session.save();
      return res.json(response);
    }

    return res.json(response);
  } catch (error) {
    const { response: fetchResponse } = error;

    return res.status(fetchResponse?.status || 500).json(error.data);
  }
});
