import { useState } from 'react';
import Swal from 'sweetalert2';

const useReclamo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [smsResponse, setSmsResponse] = useState('');
  const [inputValues, setInputValues] = useState({});

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
    handleOnChange,
    smsResponse,
  };
};

export default useReclamo;
