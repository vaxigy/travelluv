import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function fetchNavData() {
  return [
    { route: '/', title: 'Home' },
    { route: '/pages', title: 'Pages' },
    { route: '/booking', title: 'Booking' },
    { route: '/blog', title: 'Blog' },
    { route: '/gallery', title: 'Gallery' },
    { route: '/contact', title: 'Contact' },
    { route: '/faq', title: 'FAQ' }
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

function Header({ onSearchClick }) {
  const SCROLL_AMOUNT = 150;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => (
      setIsScrolled(window.scrollY > SCROLL_AMOUNT)
    );

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navData = fetchNavData();
  const navLinks = getNavLinks(navData);

  return (
    <header className={isScrolled ? 'header-scrolled' : 'header-initial'}>
      <div className='header-wrap'>
        <a className='logo' href='/'>
          <img src='/images/logo.png' alt='logo' />
        </a>
        <nav className='header-nav'>
          {navLinks}
        </nav>
        <button>
          <img src='./images/search-white.svg' alt='search' onClick={onSearchClick} />
        </button>
      </div>
    </header>
  );
}

export default Header;
