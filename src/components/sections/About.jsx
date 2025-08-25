import React from 'react';
import { Link } from 'react-router-dom';

function About({ renderFull }) {
  const socialData = [
    {
      link: 'https://facebook.com',
      icon: '/images/icon-facebook.svg',
      type: 'facebook'
    },
    {
      link: 'https://x.com',
      icon: '/images/icon-twitter.svg',
      type: 'twitter'
    },
    {
      link: 'https://instagram.com',
      icon: '/images/icon-instagram.svg',
      type: 'instagram'
    },
    {
      link: 'https://linkedin.com',
      icon: '/images/icon-linkedin.svg',
      type: 'linkedin'
    },
    {
      link: 'https://youtube.com',
      icon: '/images/icon-youtube.svg',
      type: 'youtube'
    }
  ];

  const textContent = (
    renderFull ?
    `
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit
      in voluptate.
    `
    :
    `
      I believe i'm a true world citizen.
      Join me on my journey to discover
      yourself by discovering the world.
    `
  );
  const linkPart = (
    renderFull ?
    <div className='about-content-social'>
      {socialData.map((social) => (
        <Link
          to={social.link}
          key={social.type}
        >
          <img src={social.icon} alt={social.type} />
        </Link>
      ))}
    </div>
    :
    <Link to='/about'>
      Read full story
    </Link>
  );
  
  return (
    <section className='about'>
      <div className="container">
        <div className="about-wrap">
          <img src="/images/common-2.jpg" alt="about" />
          <div className="about-content">
            <p className='about-content-header-top'>
              Who am I
            </p>
            <h2>
              Sharing my travel experience
              after visiting 40 countries
            </h2>
            <p className='about-content-desc'>
              {textContent}
            </p>
            {linkPart}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
