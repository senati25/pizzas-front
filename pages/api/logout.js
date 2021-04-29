import { withSession } from '../../lib/withSession';

export default withSession(async (req, res) => {
  req.session.unset('session');
  await req.session.save();
  res.json({ isLoggedIn: false });
});
