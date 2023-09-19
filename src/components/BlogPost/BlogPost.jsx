import { useState } from 'react';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';
import Rating from './Rating';
import LikeDislike from './LikeDislike';

const BlogPost = ({ post, deletePost, updatePost }) => {
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      )}
      <CommentForm onCommentSubmit={handleCommentSubmit} />
      <Rating value={rating} onChange={handleRatingChange} />
      <LikeDislike
        likes={likes}
        dislikes={dislikes}
        onLike={handleLike}
        onDislike={handleDislike}
      />
      <button onClick={() => deletePost(post.id)}>Delete</button>
      <button onClick={() => updatePost(post.id, { title: 'Updated Title', content: 'Updated Content' })}>Edit</button>
    </div>
  );
};

BlogPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  deletePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
};

export default BlogPost;
