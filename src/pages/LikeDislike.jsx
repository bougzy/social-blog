
import PropTypes from 'prop-types';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const LikeDislike = ({ likes, dislikes, onLike, onDislike }) => {
  return (
    <div className="me-2">
      <h3></h3>
      <div className="ms-3">
        <button onClick={onLike} className="border-0 p-1 ">
          <FaThumbsUp /> {likes}
        </button>
        <button onClick={onDislike}  className="border-0 p-1 ">
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
