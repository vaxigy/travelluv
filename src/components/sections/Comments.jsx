import React, { useState } from 'react';
import CommentItem from '../shared/CommentItem';

function getArticleComments(articleId) {
  return [
    {
      name: 'Michael Watson',
      date: '2020-12-02',
      text: 'What an amazing post! Thanks, helps a lot!',
      articleId: articleId,
      replies: [
        {
          name: 'Sophia Conway',
          date: '2020-12-03',
          text: 'Agreed!',
          articleId: articleId,
          replies: []
        },
        {
          name: 'Mateo Timoney',
          date: '2020-12-03',
          text: 'Lorem 123',
          articleId: articleId,
          replies: []
        }
      ]
    },
    {
      name: 'Emma Corry',
      date: '2020-12-02',
      text: 'The best travel guide ever!',
      articleId: articleId,
      replies: []
    }
  ];
};

function Comments({ articleId }) {
  const [comments, setComments] = useState(getArticleComments(articleId));
  const [commentFormValues, setCommentFormValues] = useState({
    name: localStorage.getItem('commentFormName') || '',
    message: '',
    save: false
  });
  const [commentFormStatus, setCommentFormStatus] = useState({
    class: '',
    message: ''
  });

  const addNewReply = (parent, commentData) => {
    const newReply = {
      name: commentData.name,
      date: new Date().toISOString().split('T')[0],
      text: commentData.text,
      articleId: articleId,
      replies: []
    };
    const updateComments = (commentList) => {
      const commentListUpdated = commentList.map((comment) => (
        comment === parent ?
          { ...comment, replies: [ ...comment.replies, newReply ] } :
          { ...comment, replies: [ ...updateComments(comment.replies) ] }
      ));
      return commentListUpdated;
    };
    setComments((prev) => updateComments(prev));
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setCommentFormValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    if (!commentFormValues.name || !commentFormValues.message) {
      setCommentFormStatus({
        class: 'failure',
        message: 'Fill out all the required fields'
      });
      return;
    }

    const newComment = {
      name: commentFormValues.name,
      date: new Date().toISOString().split('T')[0],
      text: commentFormValues.message,
      articleId: articleId,
      replies: []
    };
    setComments((prev) => [ ...prev, newComment ]);

    if (commentFormValues.save) {
      localStorage.setItem('commentFormName', commentFormValues.name);
    }

    setCommentFormStatus({ class: '', message: '' });
  };

  return (
    <section className="comments">
      <div className="container">
        <div className="comments-wrap">
          <h3>Comments</h3>
          <ul className="comment-items">
            {comments.map((comment) => (
              <CommentItem comment={comment} onReplySubmit={addNewReply} />
            ))}
          </ul>
          <h3>Leave a comment</h3>
          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={commentFormValues.name}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              placeholder="Write your comment here"
              onChange={handleInputChange}
            ></textarea>
            <div>
              <input
                type="checkbox"
                id="save"
                name="save"
                onChange={handleInputChange}
              />
              <label htmlFor="save">
                Save my name in this browser for the next time I comment
              </label>
            </div>
            <button className="button-primary" type="submit">Send</button>
            <p className={`status-box ${commentFormStatus.class}`}>{commentFormStatus.message}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Comments;
