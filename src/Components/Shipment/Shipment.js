import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(categoryContext);
    return (
        <div>
            <h1>This is shipment</h1>
            <button onClick={() => setCategory(category + 2)}>Increaser</button>
        </div>
    );
};

export default Shipment;