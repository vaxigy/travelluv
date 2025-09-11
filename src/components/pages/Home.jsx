import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import HotPosts from '../sections/HotPosts';

function Home() {
  const configHero = {
    image: '/images/common-1.jpg',
    height: '82vh',
    text: "Let's discover more",
    title: 'Mountains are calling'
  }
  
  return (
    <>
      <Hero config={configHero} />
      <About renderFull={false} />
      <HotPosts />
    </>
  );
}

export default Home;
