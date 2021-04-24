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
  const [_isMounted, setIsMounted] = useState(true);

  const handleOnChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { isLoggedIn } = await mutateSession(
        await fetcher('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            correo: inputValues.email,
            password: inputValues.password,
          }),
        })
      );

      console.log({ isLoggedIn });
      console.log({ _isMounted });

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

  useEffect(() => {
    if (session && session?.isLoggedIn) {
      router.replace('/admin/analytics');
    }
  }, [session]);

  useEffect(
    () => () => {
      setIsMounted(false);
    },
    []
  );

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
