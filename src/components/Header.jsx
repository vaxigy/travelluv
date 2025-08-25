import React from 'react';
import { NavLink } from 'react-router-dom';

function fetchNavData() {
  return [
    { route: '/', title: 'Home' },
    { route: '/pages', title: 'Pages' },
    { route: '/booking', title: 'Booking' },
    { route: '/services', title: 'Services' },
    { route: '/blog', title: 'Blog' },
    { route: '/gallery', title: 'Gallery' },
    { route: '/contact', title: 'Contact' }
  ];
}

function getNavLinks(navData) {
  return navData.map(
    (navObject) => (
      <NavLink
        to={navObject.route}
        key={navObject.route}
      >
        {navObject.title}
      </NavLink>
    )
  );
}

function Header() {
  const navData = fetchNavData();
  const navLinks = getNavLinks(navData);

  return (
    <header>
      <div className='header-wrap'>
        <a className='logo' href='/'>
          <img src='/images/logo.png' alt='logo' />
        </a>
        <nav className='header-nav'>
          {navLinks}
        </nav>
        <button>
          <img src='./images/search.svg' alt='search' />
        </button>
      </div>
    </header>
  );
}

export default Header;
