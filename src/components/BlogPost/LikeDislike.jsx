
import PropTypes from 'prop-types';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const LikeDislike = ({ likes, dislikes, onLike, onDislike }) => {
  return (
    <div>
      <h3>Like/Dislike</h3>
      <div>
        <button onClick={onLike}>
          <FaThumbsUp /> {likes}
        </button>
        <button onClick={onDislike}>
          <FaThumbsDown /> {dislikes}
        </button>
      </div>
    </div>
  );
};

LikeDislike.propTypes = {
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
};

export default LikeDislike;
