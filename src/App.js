import { Route, Routes } from 'react-router-dom';
import './App.css';
import Shopmandu from './shopmandu';
import Checkout from './shopmandu/Checkout';
import ProductDetails from './shopmandu/ProductDetails';

function App() {
  return (
    <>
    <Routes> 
      <Route path='/' exact element={<Shopmandu/>} />
      <Route path='/checkout' exact element={<Checkout/>} />
      <Route path='/product/:id' exact element={<ProductDetails/>} />
    </Routes>
    </>
  );
}

export default App;
