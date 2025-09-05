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
        <FormSmall />
        <div>© 2023 TravelLuv</div>
      </div>
    </footer>
  );
}

export default Footer;
