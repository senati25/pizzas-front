import withSession from '../../lib/withSession';

export default withSession(async (req, res) => {
  const dashboardSession = req.session.get('dashboardSession');

  if (dashboardSession) {
    res.json({
      isLoggedIn: true,
      ...dashboardSession,
    });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
});
