import { withIronSession } from 'next-iron-session';

const withSession = (handler) =>
  withIronSession(handler, {
    password: '2gyZ3GDw3LHZQKDhPmPDL3sjREVRXPr8',
    cookieName: 'dashboardSession',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });

export default withSession;
