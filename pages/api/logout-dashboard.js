import { withDashboardSession } from '../../lib/withSession';

export default withDashboardSession(async (req, res) => {
  req.session.unset('dashboardSession');
  await req.session.save();
  res.json({ isLoggedIn: false });
});
