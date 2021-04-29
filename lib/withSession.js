import { withIronSession } from 'next-iron-session';

export const withSession = (handler) =>
  withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: 'session',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });

export const withDashboardSession = (handler) =>
  withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: 'dashboardSession',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });
