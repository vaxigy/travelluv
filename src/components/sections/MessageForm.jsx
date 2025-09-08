import React, { useState } from 'react';

function MessageForm() {
  const [InputValues, setInputValues] = useState({
    name: '',
    email: '',
    message: '',
    agree: false
  });
  const [status, setStatus] = useState({ class: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setInputValues({
      ...InputValues,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!InputValues.agree) {
      setStatus({
        class: 'failure',
        message: 'Please accept the Terms and Conditions'
      });
      return;
    }
    const isSent = true;
    if (isSent) {
      setStatus({
        class: 'success',
        message: 'Your data has been successfully sent'
      });
      setIsSubmitted(true);
    } else {
      setStatus({
        class: 'failure',
        message: 'Failed to send the data. Try again'
      });
    }
  };

  return (
    <section className='message-form'>
      <div className="container">
        <div className="message-form-wrap">
          <div className="message-form-left">
            <h2 className='base-heading'>Get In Touch</h2>
            <div className='message-form-contact'>
              <p>
                Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <div className="message-form-contact-item">
                <img src="/images/icon-telephone.svg" alt="tel-icon"/>
                <p>+1650-243-0000</p>
              </div>
              <div className="message-form-contact-item">
                <img src="/images/icon-email.svg" alt="email-icon"/>
                <p>info@yourcompany.com</p>
              </div>
              <div className="message-form-contact-item">
                <img src="/images/icon-location.svg" alt="location-icon" />
                <p>North Melbourne VIC 3051, Australia</p>
              </div>
            </div>
          </div>
          <div className="message-form-right">
            <h2 className='base-heading'>Send A Message</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name='name'
                  placeholder='Name'
                  disabled={isSubmitted}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name='email'
                  placeholder='E-mail'
                  disabled={isSubmitted}
                  onChange={handleChange}
                />
              </div>
              <textarea
                placeholder='Message'
                name='message'
                disabled={isSubmitted}
                onChange={handleChange}
              />
              <div>
                <input
                  type="checkbox"
                  name='agree'
                  disabled={isSubmitted}
                  onChange={handleChange}
                />
                <label htmlFor="agree">I agree to all Terms and Conditions</label>
              </div>
              <button
                type='submit'
                className='button-primary'
                disabled={isSubmitted}
              >
                Submit
              </button>
            </form>
            <p className={`status-box ${status.class}`}>{status.message}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MessageForm;
