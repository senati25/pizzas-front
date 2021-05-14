import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import fetcher from '../../lib/fetcher';
import useSessionDashboardContext from './useSessionDashboardContext';

const useLoginDashboard = () => {
  const router = useRouter();
  const { mutateSession } = useSessionDashboardContext();
  const [isLoading, setIsLoading] = useState(false);

  const [inputValues, setInputValues] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [_isMounted, setIsMounted] = useState(true);

  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { isLoggedIn } = await mutateSession(
        await fetcher('/api/login-dashboard', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            correo: inputValues.email,
            password: inputValues.password,
          }),
        })
      );

      if (_isMounted && !isLoggedIn) {
        setIsLoading(false);
      }
    } catch (error) {
      if (_isMounted) {
        setIsLoading(false);
        console.error('An unexpected error happened:', error);
        setErrorMessage(error.data.message);
      }
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    mutateSession(
      await fetcher('/api/logout-dashboard', { method: 'POST' }),
      false
    );
    router.push('/dashboard');
  };

  useEffect(
    () => () => {
      setIsMounted(false);
    },
    []
  );

  return {
    isLoading,
    handleOnChange,
    handleLogout,
    handleSubmitLogin,
    errorMessage,
  };
};

export default useLoginDashboard;
