import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import fetcher from '../../lib/fetcher';
import useSessionDashboardContext from './useSessionDashboardContext';

const useLoginDashboard = () => {
  const router = useRouter();
  const { session, mutateSession } = useSessionDashboardContext();
  const [isLoading, setIsLoading] = useState(true);
  const [inputValues, setInputValues] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [_isMounted, setisMounted] = useState(true);

  const handleOnChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log({ inputValues });
    try {
      await mutateSession(
        await fetcher('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            correo: inputValues.email,
            password: inputValues.password,
          }),
        })
      );

      if (_isMounted) {
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

  useEffect(() => {
    if (session && session?.isLoggedIn) {
      router.replace('/admin/analytics');
    }

    return () => setisMounted(false);
  }, [session]);

  useEffect(() => {
    if (!session?.isLoggedIn) {
      setIsLoading(false);
    } else if (!session) {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    handleOnChange,
    handleSubmitLogin,
    errorMessage,
  };
};

export default useLoginDashboard;
