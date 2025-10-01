import React from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../sections/Hero';
import Article from '../sections/Article';
import Comments from '../sections/Comments';

function SingleArticle() {
  const configHero = {
    image: '/images/common-3.jpg',
    height: '60vh',
    text: "Home / Article",
    title: 'Article'
  };
  const { id } = useParams();

  return (
    <>
      <Hero config={configHero}/>
      <Article id={id}/>
      <Comments articleId={id} />
    </>
  );
}

export default SingleArticle;
