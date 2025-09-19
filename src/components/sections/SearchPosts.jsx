import React, { useState } from 'react';
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
  const foundPosts = findPostsByTerm(searchTerm);

  const [currentPage, setCurrentPage] = useState(1);
  const articlePerPage = 4;
  const totalPageCount = Math.ceil(foundPosts.length / articlePerPage);

  const firstArticleIndex = currentPage * articlePerPage - articlePerPage;
  const lastArticleIndex = firstArticleIndex + articlePerPage;
  const currentArticles = foundPosts.slice(firstArticleIndex, lastArticleIndex);

  const showPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const showPreviousPage = () => {
    setCurrentPage((prev) => Math.min(prev - 1, 1));
  };
  const showNextPage = () => {
    setCurrentPage((prev) => Math.max(prev + 1, totalPageCount));
  };

  return (
    <section className='search-posts'>
      <div className="container">
        <div className="search-posts-wrap">
          <h2 className='base-heading'>Search Results</h2>
          <div className="search-posts-content">
            {currentArticles.length !== 0 ?
              currentArticles.map((post) => <PostCard postData={post} />) :
              <div className='search-posts-not-found'>No posts found</div>}
          </div>
          {totalPageCount > 1 && (
            <div className="search-posts-pagination-bar">
              <button
                className="search-posts-page-previous"
                onClick={showPreviousPage}
                disabled={currentPage <= 1}
              >Previous</button>
              <div className="search-posts-page-numbers">
                {[...Array(totalPageCount)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      className={pageNumber === currentPage ? 'active' : ''}
                      onClick={() => showPage(pageNumber)}
                    >{pageNumber}</button>
                  );
                })}
              </div>
              <button
                className="search-posts-page-next"
                onClick={showNextPage}
                disabled={currentPage >= totalPageCount}
              >Next</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SearchPosts;
