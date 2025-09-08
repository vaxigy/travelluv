import React, { useState } from 'react';

function FormSmall() {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState({ class: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const input = event.target;
    setInputValue(input.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) {
      setStatus({
        class: 'failure',
        message: 'Fill out the form'
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
        message: 'Something went wrong. Try again later'
      });
    }
  };

  return (
    <div className='form-small'>
      <h2>Subscribe to Our Newsletter</h2>
      <p>Get latest news, updates and deals directly mailed to your inbox</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder='Your email address here'
          disabled={isSubmitted}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className={'button-primary'}
          disabled={isSubmitted}
        >
          Subscribe
        </button>
      </form>
      <p className={`status-box ${status.class}`}>{status.message}</p>
    </div>
  );
}

export default FormSmall;
