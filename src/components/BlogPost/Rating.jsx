
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

const Rating = ({ value, onChange }) => {
  const handleRatingChange = (newRating) => {
    onChange(newRating);
  };

  return (
    <div>
      <h3>Rating</h3>
      <div>
        {[1, 2, 3, 4, 5].map((rating) => (
          <span
            key={rating}
            onClick={() => handleRatingChange(rating)}
            style={{ cursor: 'pointer' }}
          >
            {rating <= value ? (
              <FaStar color="#ffc107" />
            ) : (
              <FaStar color="#ccc" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
