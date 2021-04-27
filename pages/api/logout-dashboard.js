import withSession from '../../lib/withSession';

export default withSession(async (req, res) => {
  req.session.unset('dashboardSession');
  await req.session.save();
  res.json({ isLoggedIn: false });
});
