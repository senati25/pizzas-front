import React, { useState } from 'react'
import useCategories from '../../../../hooks/useCategories';
import useSubCategories from '../../../../hooks/useSubCategories'
import DashboardForm from '../../../shared/DashBoardForm'
import Categories from '../../Categories';

export const FormCreateSubCategorie = () => {
    const {createSubCategory,responseCreate,handleChange,handleSubmit,handleShowNewCategoryForm}=useSubCategories();
    
    return (
        <DashboardForm handleSubmit={handleSubmit}
        title="Crear nueva Subcategoria"
        onCancel={()=>{alert("hola mundo en react")}} >
           <input type="text" name="denominacion" id="denominacion" placeholder="DENOMINACION" onChange={handleChange}/>
           <input type="number" name="precio"  id="precio" placeholder="PRECIO" min="0" onChange={handleChange}/>
           <input type="number" name="categoria_id"   placeholder="CATEGORIA ID" onChange={handleChange}/>
           
        </DashboardForm>

    )
}
