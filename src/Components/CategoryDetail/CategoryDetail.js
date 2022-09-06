import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const CategoryDetail = () => {
    const category = useContext(categoryContext);
    return (
        <div>
            <p>this is your CategoryDetail {category}</p>
            <h5>Selected Category {category}</h5>
        </div>
    );
};

export default CategoryDetail;