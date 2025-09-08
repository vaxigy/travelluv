import React from 'react';
import FormSmall from './sections/FormSmall';

function Footer() {
  return (
    <footer
      style={{
        backgroundImage: `url(/images/bg-footer.jpg)`
      }}
    >
      <div className="container">
        <div className="footer-wrap">
          <FormSmall />
          <div className='footer-menu'>
            <div className="footer-column info">
              <img src='/images/logo.png' alt='logo' />
              <p>
                Velit sed ante in nisl amet sapien.
                Mauris a ullamcorper ut iaculis.
                Et massa non eu ac tristique assa
                non eu ac tristique.
              </p>
            </div>
            <div className="footer-column nav">
              <h3>About us</h3>
              <ul>
                <li><a href="/">About us</a></li>
                <li><a href="/">Who are we</a></li>
                <li><a href="/">Why choose us</a></li>
                <li><a href="/">Our history</a></li>
              </ul>
            </div>
            <div className="footer-column nav">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blogs</a></li>
                <li><a href="/">News</a></li>
              </ul>
            </div>
            <div className="footer-column nav">
              <h3>Contact us</h3>
              <ul>
                <li><a href="/">Our location</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Address</a></li>
                <li><a href="/">Facebook</a></li>
              </ul>
            </div>
            <div className="footer-column nav">
              <h3>More info</h3>
              <ul>
                <li><a href="/">Policy</a></li>
                <li><a href="/">Terms</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
            </div>
          </div>
          <div>© 2023 TravelLuv</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
