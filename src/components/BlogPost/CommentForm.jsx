import  { useState } from 'react';
import PropTypes from 'prop-types';

const CommentForm = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== '') {
      onCommentSubmit(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          placeholder="Write a comment..."
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
      </div>
      <button type="submit">Add Comment</button>
    </form>
  );
};

CommentForm.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
