import { withIronSession } from 'next-iron-session';

const withSession = (handler) =>
  withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: 'dashboardSession',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });

export default withSession;
