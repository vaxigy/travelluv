import React from 'react';
import Hero from '../sections/Hero';
import FAQContent from '../sections/FAQContent';

function FAQ() {
  const configHero = {
    image: '/images/common-3.jpg',
    height: '60vh',
    text: "Home / FAQ",
    title: 'FAQ'
  };

  return (
    <>
      <Hero config={configHero} />
      <FAQContent />
    </>
  );
}

export default FAQ;
