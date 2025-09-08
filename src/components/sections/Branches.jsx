import React from 'react';

function Branches() {
  return (
    <section class='branches'>
      <div className="container">
        <div className="branches-wrap">
          <div className="branch-item">
            <h2 className='base-heading'>USA</h2>
            <p className="branch-address">
              730 Glenstone Ave 65802, Springfield, US
            </p>
            <p className="branch-tel">
              +123 987 321 , +123 123 654
            </p>
            <p className="branch-email">
              info@yourcompany.com
            </p>
          </div>
          <div className="branch-item">
            <h2 className='base-heading'>France</h2>
            <p className="branch-address">
              13 Rue Montmartre 75001, Paris, France
            </p>
            <p className="branch-tel">+123 987 321 , +123 123 654</p>
            <p className="branch-email">info@yourcompany.com</p>
          </div>
          <div className="branch-item">
            <h2 className='base-heading'>Office</h2>
            <p className="branch-address">
              18 Chapel Brow PR25 3NE, Leyland, UK
            </p>
            <p className="branch-tel">
              +123 987 321 , +123 123 654
            </p>
            <p className="branch-email">
              info@yourcompany.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Branches;
