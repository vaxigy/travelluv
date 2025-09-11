import React from 'react';
import PostCard from '../shared/PostCard';

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

function findPostsByTerm(searchTerm) {
  searchTerm = searchTerm.toLowerCase();

  return posts.filter((post) => (
    post.description.toLowerCase().includes(searchTerm)
  ));
}

function SearchPosts({ searchTerm }) {
  const postsFound = findPostsByTerm(searchTerm);
  const postsRendered = postsFound.length ?
    postsFound.map(
      (post) => <PostCard postData={post}/>
    )
    :
    <div className='search-posts-not-found'>No posts found</div>;

  return (
    <section className='search-posts'>
      <div className="container">
        <h2 className='base-heading'>Search Results</h2>
        <div className="search-posts-container">{postsRendered}</div>
      </div>
    </section>
  );
}

export default SearchPosts;
