import React from 'react';
import Hero from '../sections/Hero';
import ImageFilter from '../sections/ImageFilter';

function Gallery() {
  const configHero = {
    image: '/images/common-3.jpg',
    height: '60vh',
    text: "Home / Gallery",
    title: 'Gallery'
  };

  return (
    <>
      <Hero config={configHero} />
      <ImageFilter />
    </>
  );
}

export default Gallery;
