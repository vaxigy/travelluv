import React from 'react';

function IntroVideo() {
  return (
    <section className="intro-video">
      <div className="container">
        <div className="intro-video-wrap">
          <h2 className="base-heading">Enjoy My Short Intro Video</h2>
          <p>Lorem ipsum dolor sit amet ut enim ad minim veniam.</p>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameborder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default IntroVideo;
