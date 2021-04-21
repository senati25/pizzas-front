import { useState } from 'react';
import UserRepository from '../../api/UserRepository';
import useSessionDashboardContext from './useSessionDashboardContext';

const useLoginDashboard = () => {
  const { setSession } = useSessionDashboardContext();
  const [inputValues, setInputValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    console.log(inputValues);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = await UserRepository.login(inputValues);
    console.log(data);

    if (data) {
      setIsLoading(false);
      setSession(data);
    }
  };

  return {
    isLoading,
    handleOnChange,
    handleSubmitLogin,
  };
};

export default useLoginDashboard;
