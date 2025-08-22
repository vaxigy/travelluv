import React from 'react';

function Header() {
  return (
    <header>
      <div className='header-wrap'>
        <a className='logo' href='/'>
          <img src='./images/logo.png' alt='logo' />
        </a>
        <nav className='header-nav'>
          <a href='/'>Home</a>
          <a href='/pages'>Pages</a>
          <a href='/booking'>Booking</a>
          <a href='/services'>Services</a>
          <a href='/blog'>Blog</a>
          <a href='/gallery'>Gallery</a>
          <a href='/contact'>Contact</a>
        </nav>
        <button>
          <img src='./images/search.svg' alt='search' />
        </button>
      </div>
    </header>
  );
}

export default Header;
