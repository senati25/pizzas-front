import Swal from 'sweetalert2';
import { useState } from 'react';
import ClaimRepostory from '../../api/ClaimRepostory';
import useDashboardContext from './useDashboardContext';

const useReclamo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [smsResponse, setSmsResponse] = useState('');
  const [inputValues, setInputValues] = useState({});

  const { refreshClaims } = useDashboardContext();
  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    console.log(inputValues);
    setIsLoading(true);
    const response = await fetch(`http://127.0.0.1:8000/api/publico/reclamo`, {
      method: 'POST',
      body: JSON.stringify(inputValues),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    console.log(data);
    if (data.estado === 'success') {
      setIsLoading(false);
      Swal.fire('Su reclamo se a enviado', '', 'success');
    } else {
      const sms = `No se a podido registrar su reclamo intentelo de nuevo`;
      setSmsResponse(sms);
      setIsLoading(false);
    }
  };
  const getDetail = async (e) => {
    setIsLoading(true);
    const response = await ClaimRepostory.getById(e);
    if (response) {
      setIsLoading(false);
      setInputValues(response);
    } else {
      Swal.fire('Error', '', 'error');
    }
  };
  const handleDeleteClaim = async (e) => {
    await ClaimRepostory.delete(e);
    await refreshClaims();
  };
  const handleOnChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    isLoading,
    handleSubmitCreate,
    inputValues,
    setInputValues,
    getDetail,
    handleOnChange,
    smsResponse,
    handleDeleteClaim,
  };
};

export default useReclamo;
