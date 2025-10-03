import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import IntroVideo from '../sections/IntroVideo';

function AboutPage() {
  const configHero = {
    image: '/images/common-3.jpg',
    height: '60vh',
    text: "Home / About",
    title: 'About'
  };
  
  return (
    <>
      <Hero config={configHero}/>
      <About renderFull={true} />
      <IntroVideo />
    </>
  );
}

export default AboutPage;
