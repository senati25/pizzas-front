import { useState } from 'react';

const useProductVariety = (varieties, setVarieties) => {
  const [values, setValues] = useState({ precio: '', denominacion: '' });

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleAddVariety = () => {
    if (values.denominacion?.length !== 0 && values.precio?.length !== 0) {
      setVarieties([...varieties, values]);
      setValues({ precio: '', denominacion: '' });
    }
  };

  const handleRemoveVariety = (index) => {
    varieties.splice(index, 1);
    setVarieties([...varieties]);
  };
  return { values, handleOnChange, handleAddVariety, handleRemoveVariety };
};

export default useProductVariety;
