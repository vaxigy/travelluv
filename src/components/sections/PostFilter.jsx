import React, { useState } from 'react';
import PostCard from '../shared/PostCard';

function PostFilter() {
  const posts = [
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
    },
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

  const categories = [...new Set(posts.map((post) => post.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const filteredPosts = posts.filter((post) => post.category === activeCategory);

  return (
    <section className="post-filter">
      <div className="container">
        <div className="post-filter-wrap">
          <div className="post-filter-tabs">
            {categories.map((category) => (
              <button
                onClick={() => setActiveCategory(category)}
                className={category === activeCategory ? 'active' : ''}
              >{category}</button>
            ))}
          </div>
          <div className="post-filter-posts">
            {filteredPosts.map((post) => <PostCard postData={post} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostFilter;
