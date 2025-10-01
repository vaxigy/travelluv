import React, { useState } from 'react';

function CommentItem({ comment, onReplySubmit }) {
  const [showReplies, setShowReplies] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyFormValues, setReplyFormValues] = useState({
    name: '',
    message: ''
  });
  const [replyFormStatus, setReplyFormStatus] = useState({
    class: '',
    message: ''
  });
  const hasReplies = comment.replies.length > 0;

  const toggleReplies = () => {
    setShowReplies((prev) => !prev);
  };

  const toggleForm = () => {
    setShowReplyForm((prev) => !prev);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReplyFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleReplySubmit = (event) => {
    event.preventDefault();

    if (!replyFormValues.name || !replyFormValues.message) {
      setReplyFormStatus({
        class: 'failure',
        message: 'Fill out all the required fields'
      });
      return;
    }

    setShowReplyForm(false);
    setShowReplies(true);

    const commentData = {
      name: replyFormValues.name,
      text: replyFormValues.message
    };
    onReplySubmit(comment, commentData);

    setReplyFormStatus({ class: '', message: '' });
  };

  return (
    <li className="comment-item">
      <div className="comment-meta">
        <h5 className="comment-name">{comment.name}</h5>
        <p className="comment-date">{comment.date}</p>
      </div>
      <p className="comment-content">{comment.text}</p>
      <div className="comment-action">
        {hasReplies && <button onClick={toggleReplies}>
          {showReplies ? 'Hide replies' : 'Show Replies'}
        </button>}
        <button onClick={toggleForm}>{showReplyForm ? 'Cancel' : 'Reply'}</button>
      </div>
      {showReplyForm && <form className="comment-reply-form" onSubmit={handleReplySubmit}>
        <input 
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Enter your reply"
          onChange={handleInputChange}
        ></textarea>
        <button className="button-primary" type="submit">Send</button>
        <p className={`status-box ${replyFormStatus.class}`}>{replyFormStatus.message}</p>
      </form>}
      {hasReplies && showReplies && <ul className='comment-replies'>
        {comment.replies.map((reply) => (
          <CommentItem comment={reply} onReplySubmit={onReplySubmit} />
        ))}
      </ul>}
    </li>
  );
}

export default CommentItem;
