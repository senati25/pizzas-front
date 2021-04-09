import {React,useState} from 'react'
import ROUTES from '../helpers/constants';
export const useSubCategories = () => {
    const [subCategories,setSubCategorie]=useState({});
    const [responseCreate,setResponseCreate]=useState({});
    const [inputValues,setInputValues]=useState({});
    const fetchSubCategories = async () => {
        const response = await fetch(`${ROUTES.api}/dashboard/subcategoriaproductos`);
        const data = await response.json();
        if (data.length) {
          setSubCategorie([...data]);
        }
      };

    const createSubCategory = async () => {
        const response=await fetch(
            `${ROUTES.api}/dashboard/subcategoriaproductos`, {
                method: 'POST',
                body: JSON.stringify(inputValues),
                headers: { 'Content-Type': 'application/json' },
              }
        );
        
        const res=await response.json();
        if(res){
            setResponseCreate(res);
        }
        console.log(responseCreate);
    }
    const handleChange=(e)=>{
        setInputValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }));
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        createSubCategory();
        console.log(inputValues);
    
    }
    return {subCategories,fetchSubCategories,responseCreate,createSubCategory,handleChange,handleSubmit};
}
export default useSubCategories;