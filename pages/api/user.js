import { withSession } from '../../lib/withSession';

export default withSession(async (req, res) => {
  const session = req.session.get('session');

  if (session) {
    res.json({
      isLoggedIn: true,
      ...session,
    });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
});
