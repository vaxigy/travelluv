import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';

function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </main>
  );
}

export default Main;
