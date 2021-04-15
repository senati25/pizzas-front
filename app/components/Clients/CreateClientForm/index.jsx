import React from 'react';
import useClients from '../../../hooks/useClientes';

const CreateClientForm = () => {
  const { inputValues } = useClients();

  return <div>Hello world</div>;
};
export default CreateClientForm;
