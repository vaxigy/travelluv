import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import SingleArticle from './pages/SingleArticle.jsx';
import Blog from './pages/Blog.jsx';
import Gallery from './pages/Gallery.jsx';
import FAQ from './pages/FAQ.jsx';
import AboutPage from './pages/AboutPage.jsx';

function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/article/:id' element={<SingleArticle />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </main>
  );
}

export default Main;
