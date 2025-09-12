import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostCard from './shared/PostCard';

const POST_LIMIT = 4;
const TEXT_POSTS_FOUND = 'Found Posts';
const TEXT_POSTS_NOT_FOUND = 'No Posts Found';

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

function filterPosts(term) {
  if (!term) {
    return [];
  }

  term = term.toLowerCase();

  return posts.filter(
    (post) => post.description.toLowerCase().includes(term)
  );
}

function SearchOverlay({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPosts, setCurrentPosts] = useState([]);
  const navigate = useNavigate();

  if (!isOpen) {
    return null;
  }
  
  const handleClose = () => {
    setSearchTerm('');
    setCurrentPosts([]);
    onClose();
  };

  const handleSearch = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);

    const updatedPosts = filterPosts(inputValue);
    setCurrentPosts(updatedPosts);
  };

  const handleSeeAll = () => {
    handleClose();
    navigate(`/blog?search=${encodeURIComponent(searchTerm)}`);
  };

  const handleCloseClick = (event) => {
    if (event.target.classList.contains('search-overlay')) {
      handleClose();
    }
  }

  return (
    <div className="search-overlay" onClick={handleCloseClick}>
      <div className="search-overlay-content">
        <div className="search-overlay-input-container">
          <input type="text" onChange={handleSearch} placeholder='Search for Posts'/>
          <button onClick={handleSeeAll}>
            <img src="/images/search-black.svg" alt="search" />
          </button>
        </div>
        <div className="search-overlay-result-posts">
          <h3>{(currentPosts.length > 0 && TEXT_POSTS_FOUND) || (searchTerm.length > 0 && TEXT_POSTS_NOT_FOUND)}</h3>
          <div className="search-overlay-result-posts-container">
            {currentPosts.slice(0, POST_LIMIT).map(
              (post) => <PostCard postData={post} onLinkClick={handleClose} />
            )}
          </div>
          {currentPosts.length > POST_LIMIT && <button onClick={handleSeeAll}>See All</button>}
        </div>
      </div>
    </div>
  );
}

export default SearchOverlay;
