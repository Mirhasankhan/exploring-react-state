import { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';

export const categoryContext = createContext();

function App() {
  const [category, setCategory] = useState(0)
  return (
    <categoryContext.Provider value={[category, setCategory]}>
      <p>Count {category}</p>
      <Home></Home>
      <Header></Header>
      <Shipment></Shipment>      
    </categoryContext.Provider>
  );
}

export default App;
