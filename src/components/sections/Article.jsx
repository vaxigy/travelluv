import React from 'react';

const tokens = {
  p: 'p',
  h3: 'h3',
  h4: 'h4'
};

const tokenFactories = {
  [tokens.p]: ({ text }) => <p>{text}</p>,
  [tokens.h3]: ({ text }) => <h3>{text}</h3>,
  [tokens.h4]: ({ text }) => <h4>{text}</h4>
};

function fetchArticle(id) {
  return {
    id: id,
    title: `A Traveler's Guide to Unforgettable Experiences (id ${id})`,
    image: '/images/common-1.jpg',
    author: 'Amanda Garfied',
    createDate: '2023-01-23',
    content: [
      {
        type: tokens.h3,
        text: `
          When it comes to traveling, the well-trodden paths
          often overshadow the hidden gems that truly define a
          destination. Whether you're an adventurer seeking
          off-the-beaten-path destinations or a cultural enthusiast
          looking to immerse yourself in local traditions,
          [Destination Name] offers something for every traveler.
        `
      },
      {
        type: tokens.p,
        text: `
          Located just outside the hustle and bustle of the city, is a
          serene spot perfect for those who want to reconnect with nature.
          Known for its breathtaking landscapes, lush greenery, and peaceful
          ambiance, it’s an ideal place for hiking, picnicking, or simply
          enjoying the views. Make sure to visit early in the morning to
          catch a stunning sunrise that will leave you in awe.
        `
      },
      {
        type: tokens.h4,
        text: `
          When, while the lovely valley teems with vapour around me, and the meridian
          sun strikes the upper surface of the impenetrable foliage of my trees
        `
      },
      {
        type: tokens.p,
        text: `
          And but a few stray gleams steal into the inner sanctuary, I
          throw myself down among the tall grass by the trickling stream;
          and, as I lie close to the earth, a thousand unknown plants are
          noticed by me: when I hear the buzz of the little world among the stalks,
          and grow familiar with the countless indescribable forms of the insects
          and flies, then I feel the presence of the Almighty, who formed us in
          his own image, and the breath of that universal love which bears and
          sustains us, as it floats around us in an eternity of bliss
        `
      }
    ]
  };
}

function renderArticleContent(articleData) {
  return (
    <div className="article-content">
      {articleData.content.map(
        (block) => tokenFactories[block.type](block)
      )}
    </div>
  );
}

function Article({ id }) {
  const articleData = fetchArticle(id);
  const articleContent = articleData === null ?
    <p>Article not found</p>
    :
    renderArticleContent(articleData);

  return (
    <section className='article'>
      <div className="container">
        <div className="article-wrap">
          <div className="article-meta">
            By <span>{articleData.author}</span> on {articleData.createDate}
          </div>
          <h2>{articleData.title}</h2>
          <img src={articleData.image} alt="article" />
          {articleContent}
        </div>
      </div>
    </section>
  );
}

export default Article;
