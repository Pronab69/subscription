import React from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { Outlet } from 'react-router';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <div>
      <Helmet><title>Boxify | Home</title></Helmet>
      <Nav></Nav>
      <main className='min-h-96'> <Outlet>
        </Outlet></main>
     
      <Footer></Footer>
    </div>
  );
};

export default App;