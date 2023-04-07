import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;