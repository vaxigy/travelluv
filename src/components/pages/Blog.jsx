import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import SearchPosts from '../sections/SearchPosts';
import HotPosts from '../sections/HotPosts';

function Blog() {
  const configHero = {
    image: '/images/common-3.jpg',
    height: '60vh',
    text: 'Home / Blog',
    title: 'Blog'
  };

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchTerm = params.get('search');

  return (
    <>
      <Hero config={configHero} />
      {searchTerm !== null && <SearchPosts searchTerm={searchTerm} />}
      <HotPosts />
    </>
  );
}

export default Blog;
