import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Fixed/Navbar';
import LayoutComponent from './Components/HomepageComponent/HomePageComponents';
import PageRoutes from './Routes/PageRoutes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
   <>
   {/* <Navbar /> */}
   {/* <LayoutComponent /> */}
   <PageRoutes />

   </>
  );
}

export default App;
