import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import SingleArticle from './pages/SingleArticle.jsx';

function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/article/:id' element={<SingleArticle />} />
      </Routes>
    </main>
  );
}

export default Main;
