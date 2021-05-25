import Swal from 'sweetalert2';
import { useState } from 'react';
import ClaimRepostory from '../../api/ClaimRepostory';
import useDashboardContext from './useDashboardContext';

const useReclamo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({});

  const { refreshData } = useDashboardContext();

  const getDetail = async (e) => {
    setIsLoading(true);
    const response = await ClaimRepostory.getById(e);
    if (response) {
      setIsLoading(false);
      setInputValues(response);
    } else {
      setIsLoading(false);
      Swal.fire('Error', '', 'error');
    }
  };

  const handleDeleteClaim = async (e) => {
    await ClaimRepostory.delete(e);
    await refreshData();
  };

  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    isLoading,

    inputValues,
    setInputValues,
    getDetail,
    handleOnChange,

    handleDeleteClaim,
  };
};

export default useReclamo;
