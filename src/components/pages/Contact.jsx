import React from 'react';
import Hero from '../sections/Hero';
import MessageForm from '../sections/MessageForm';
import Branches from '../sections/Branches';

function Contact() {
  const configHero = {
    image: '/images/common-3.jpg',
    height: '60vh',
    text: "Home / Contact",
    title: 'Contact'
  };

  return (
    <>
      <Hero config={configHero} />
      <MessageForm />
      <Branches />
    </>
  );
}

export default Contact;
