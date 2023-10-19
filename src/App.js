import './App.css';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import MainAuth from './user/MainAuth';
import Dashboard from './user/Dashboard';
import PrivateRoute from './context/PrivateRoute';
import ProductDes from './Product/ProductDes';
import CascedingDrop from './component/CascedingDrop';
import Cart from './Product/Cart'
import Navbar from './component/navbar/Navbar';

function App() {

  console.log('from app.js')
  return (
    <>
    
      <div className='container mt-2'>
        <Navbar />
      </div>
      <PrivateRoute>
        <Routes>
          <Route path='/' element={<MainAuth />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/productDetails/:id' element={<ProductDes />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>
      </PrivateRoute>
      {/* 
      <CascedingDrop /> */}
      <Toaster />
    </>
  );
}

export default App;
