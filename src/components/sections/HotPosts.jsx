import React from 'react';
import PostCard from '../shared/PostCard';

function HotPosts() {
  const popularPosts = [
    {
      id: 1,
      image: '/images/common-4.jpg',
      category: 'Food and culture',
      description: 'Looking for an extra push for your workout session'
    },
    {
      id: 2,
      image: '/images/common-5.jpg',
      category: 'things to do',
      description: 'Replenish your body with nutrients'
    },
    {
      id: 3,
      image: '/images/common-6.jpg',
      category: 'Travel guide',
      description: 'Protein-packed snack like cottage cheese or a protein bar aids'
    },
    {
      id: 4,
      image: '/images/common-7.jpg',
      category: 'Places',
      description: 'Snack like cottage cheese or a protein bar aids'
    }
  ];
  const latestPosts = [
    {
      id: 5,
      image: '/images/common-8.jpg',
      category: 'Food and culture',
      description: 'Looking for an extra push for your workout session'
    },
    {
      id: 6,
      image: '/images/common-1.jpg',
      category: 'things to do',
      description: 'Replenish your body with nutrients'
    },
    {
      id: 7,
      image: '/images/common-9.jpg',
      category: 'Travel guide',
      description: 'Protein-packed snack like cottage cheese or a protein bar aids'
    },
    {
      id: 8,
      image: '/images/common-10.jpg',
      category: 'Places',
      description: 'Snack like cottage cheese or a protein bar aids'
    }
  ];

  return (
    <section className='hot-posts'>
      <div className="container">
        <div className="hot-posts-wrap">
          <div className="hot-posts-container">
            <h2 className='base-heading'>Popular Stories</h2>
            <div className='hot-posts-container-inner'>
              {popularPosts.map((post) => <PostCard postData={post} />)}
            </div>
          </div>
          <div className="hot-posts-container">
            <h2 className='base-heading'>Latest Posts</h2>
            <div className='hot-posts-container-inner'>
              {latestPosts.map((post) => <PostCard postData={post} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotPosts;
