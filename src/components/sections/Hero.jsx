import React from 'react';

function Hero({ config }) {
  return (
    <section
      className='hero'
      style={{
        backgroundImage: `url(${config.image})`,
        height: config.height
      }}
    >
      <div className="container">
        <p>{config.text}</p>
        <h1>{config.title}</h1>
      </div>
    </section>
  );
}

export default Hero;
