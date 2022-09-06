import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Header = () => {
    const[category, setCategory] = useContext(categoryContext);
    
    
    return (
        <div>
            <h1>THis is Header {category}</h1>
            <button onClick={() => setCategory(category + 1)}>Increase</button>
        </div>
    );
};

export default Header;