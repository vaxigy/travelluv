import React, { useState } from 'react';

function FAQContent() {
  const FAQData = [
    {
      question: 'Can I start bloggin?',
      answer: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.'
    },
    {
      question: 'Do I need to have a website?',
      answer: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.'
    },
    {
      question: 'What should i do to have happy life?',
      answer: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.'
    },
    {
      question: 'Can I get be a blogger too?',
      answer: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.'
    },
    {
      question: 'Can i lose weight without diet?',
      answer: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.'
    }
  ];

  const [openedFAQIndexes, setOpenedFAQIndexes] = useState(new Set());
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ class: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const toggleFAQIndex = (index) => {
    if (openedFAQIndexes.has(index)) {
      setOpenedFAQIndexes((prev) => {
        prev.delete(index);
        return new Set(prev);
      });
    } else {
      setOpenedFAQIndexes((prev) => {
        prev.add(index);
        return new Set(prev);
      });
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const isSent = true;
    if (isSent) {
      setFormStatus({
        class: 'success',
        message: 'Your data has been successfully sent'
      });
      setIsFormSubmitted(true);
    } else {
      setFormStatus({
        class: 'failure',
        message: 'Failed to send the data. Try again'
      });
    }
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-wrap">
          <div className="faq-left">
            <h2 className="base-heading">Frequently asked questions</h2>
            <div className="faq-left-description">
              Malesuada nunc vel risus commodo viverra.
              Viverra accumsan in nisl nisi. Pretium nibh
              ipsum consequat nisl vel pretium. Tortor dignissim
              convallis aenean et tortor at risus viverra adipiscing.
            </div>
            <div className="faq-left-questions">
              {FAQData.map((faq, index) => {
                const isOpened = openedFAQIndexes.has(index);
                return (
                  <div className={`faq-item ${isOpened ? 'active' : ''}`}>
                    <button className="faq-question" onClick={() => toggleFAQIndex(index)}>
                      <h4>{faq.question}</h4>
                      <img src="/images/arrow-down.svg" alt="down" />
                    </button>
                    {isOpened && <div className="faq-answer">{faq.answer}</div>}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="faq-right">
            <h2 className="base-heading">Ask us anything</h2>
            <div className="faq-right-description">
              Call Us +123 987 456 or just drop us your message
              at contact@yourcompany.com. You can directly message us.
            </div>
            <form className="faq-right-form" onSubmit={handleFormSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  disabled={isFormSubmitted}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  disabled={isFormSubmitted}
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                disabled={isFormSubmitted}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter your question subject"
                disabled={isFormSubmitted}
                onChange={handleInputChange}
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                disabled={isFormSubmitted}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="button-primary"
                disabled={isFormSubmitted}
              >Submit</button>
              <p className={`status-box ${formStatus.class}`}>{formStatus.message}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQContent;
