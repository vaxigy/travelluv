import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Posts from '../sections/Posts';

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
      <Posts />
    </>
  );
}

export default Home;
