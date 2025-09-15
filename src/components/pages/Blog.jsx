import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import SearchPosts from '../sections/SearchPosts';
import HotPosts from '../sections/HotPosts';
import PostFilter from '../sections/PostFilter';

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
      <PostFilter />
    </>
  );
}

export default Blog;
