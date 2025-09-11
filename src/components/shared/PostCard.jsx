import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ postData }) {
  return (
    <div className='post'>
      <img src={postData.image} alt='post' />
      <div>
        <h4>{postData.category}</h4>
        <Link to={`/article/${postData.id}`}>{postData.description}</Link>
      </div>
    </div>
  );
}

export default PostCard;
