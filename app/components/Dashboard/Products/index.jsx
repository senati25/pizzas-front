import {React,useState} from 'react';
import DataTable from 'react-data-table-component';
import useProducts from '../../../hooks/useProducts';

const Products = () => {
  const {products} = useProducts();
  const columns = [
    {
      name: 'nombre',
      selector: 'nombre',
      sortable: true,
    },
    {
      name: 'descripcion',
      selector: 'descripcion',
      
      sortable: true,
      right: true,
    },
    {
      name: 'estado',
      selector: 'estado',
      
      sortable: true,
      right: true,
    },
    {}
  ];
    const handleChange=(e)=>{
      console.log(e);
    }

return (
  <>
  <div className="container_tableProducts">
  <DataTable
  title="Productos"
  columns={columns}
  data={products}
  selectableRows
  Clicked
  Selected={handleChange}
  pagination={true}
  button={true}
/>
</div>
</>
)


};


export default Products;
