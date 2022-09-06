import React, { useContext } from 'react';
import { categoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Categories = () => {
   const category = useContext(categoryContext)
    return (
        <div>
            <h1>Select Your Category{category}</h1>
            <CategoryDetail></CategoryDetail>
        </div>
    );
};

export default Categories;