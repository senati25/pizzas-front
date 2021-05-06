import { useState } from 'react';

const useProductVariety = (varieties, setVarieties) => {
  const [values, setValues] = useState({ precio: '', denominacion: '' });

  const handleOnChange = (e) => {
    let { value } = e.target;
    if (e.target.name === 'precio') value = parseInt(value, 10);
    setValues({ ...values, [e.target.name]: value });
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
