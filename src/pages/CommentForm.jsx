import  { useState } from 'react';
import PropTypes from 'prop-types';
import { FaComment } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CommentForm = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== '') {
      onCommentSubmit(comment);
      setComment('');
      toggleModal();
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <FaComment className="comment-icon mt-3" onClick={toggleModal}  />

      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Write a comment..."
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Comment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

CommentForm.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
