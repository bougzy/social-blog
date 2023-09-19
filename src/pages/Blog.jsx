// import  { useState } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import CommentForm from './CommentForm';
// import Rating from './Rating';
// import LikeDislike from './LikeDislike';
// import "./Blog.css";

// const Blog = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       title: 'Blog Post 1',
//       content: 'This is the content of Blog Post 1.',
//     },
//     {
//       id: 2,
//       title: 'Blog Post 2',
//       content: 'This is the content of Blog Post 2.',
//     },
//     {
//       id: 3,
//       title: 'Blog Post 3',
//       content: 'This is the content of Blog Post 3.',
//     },
//   ];

//   return (
//     <div>
//       <h2>Blog</h2>
//       {blogPosts.map((post) => (
//         <div key={post.id}>
//           <h3>{post.title}</h3>
//           <p>{post.content}</p>
//           <Link to={`/blog/${post.id}`}>Read More</Link>
//           <hr />
//           <BlogPost title={post.title} content={post.content} />
//         </div>
//       ))}
//     </div>
//   );
// };

// const BlogPost = ({ title, content }) => {
//   const [comments, setComments] = useState([]);
//   const [rating, setRating] = useState(0);
//   const [likes, setLikes] = useState(0);
//   const [dislikes, setDislikes] = useState(0);

//   const handleCommentSubmit = (comment) => {
//     setComments([...comments, comment]);
//   };

//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//   const handleLike = () => {
//     setLikes(likes + 1);
//   };

//   const handleDislike = () => {
//     setDislikes(dislikes + 1);
//   };

//   return (
//     <div>
//       <h2>{title}</h2>
//       <p>{content}</p>
     
//       <h3>Comments</h3>
//       {comments.length === 0 ? (
//         <p>No comments yet.</p>
//       ) : (
//         <ul>
//           {comments.map((comment, index) => (
//             <li key={index}>{comment}</li>
//           ))}
//         </ul>
//       )}
//       <div className="d-flex"> 
//       <CommentForm onCommentSubmit={handleCommentSubmit} className="mt-3"/>
//       <LikeDislike
//         likes={likes}
//         dislikes={dislikes}
//         onLike={handleLike}
//         onDislike={handleDislike}
//       />
//       <Rating value={rating} onChange={handleRatingChange} />
//         </div>
//     </div>
//   );
// };

// BlogPost.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
// };

// export default Blog;




import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import Rating from './Rating';
import LikeDislike from './LikeDislike';
import './Blog.css';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState(() => {
    // Retrieve blog posts from local storage, or use default values
    const storedPosts = localStorage.getItem('blogPosts');
    return storedPosts ? JSON.parse(storedPosts) : [
    //   {
    //     id: 1,
    //     title: 'Blog Post 1',
    //     content: 'This is the content of Blog Post 1.',
    //     comments: [] // Add an empty comments array
    //   },
    //   {
    //     id: 2,
    //     title: 'Blog Post 2',
    //     content: 'This is the content of Blog Post 2.',
    //     comments: [] // Add an empty comments array
    //   },
    //   {
    //     id: 3,
    //     title: 'Blog Post 3',
    //     content: 'This is the content of Blog Post 3.',
    //     comments: [] // Add an empty comments array
    //   },
    ];
  });
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  useEffect(() => {
    // Save blog posts to local storage whenever they change
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  const deletePost = (postId) => {
    setBlogPosts(blogPosts.filter((post) => post.id !== postId));
  };

  const updatePost = (postId, updatedPost) => {
    setBlogPosts(
      blogPosts.map((post) =>
        post.id === postId ? { ...post, ...updatedPost } : post
      )
    );
  };

  const handleInputChange = (event) => {
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddPost = () => {
    const newPostId = blogPosts.length + 1;
    const timestamp = new Date().toLocaleString(); // Get current date and time
    const updatedPosts = [
      {
        ...newPost,
        id: newPostId,
        comments: [],
        timestamp: timestamp // Add timestamp property
      },
      ...blogPosts
    ];
    setBlogPosts(updatedPosts);
    setNewPost({ title: '', content: '' });
  };

  const handleCommentSubmit = (postId, comment) => {
    const updatedPosts = blogPosts.map((post) =>
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    );
    setBlogPosts(updatedPosts);
  };

  const handleRatingChange = (postId, newRating) => {
    const updatedPosts = blogPosts.map((post) =>
      post.id === postId ? { ...post, rating: newRating } : post
    );
    setBlogPosts(updatedPosts);
  };

  const handleLike = (postId) => {
    const updatedPosts = blogPosts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setBlogPosts(updatedPosts);
  };

  const handleDislike = (postId) => {
    const updatedPosts = blogPosts.map((post) =>
      post.id === postId ? { ...post, dislikes: post.dislikes + 1 } : post
    );
    setBlogPosts(updatedPosts);
  };

  return (
    <div className="container">
      <h2>Blog</h2>
      <div className="mb-3">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newPost.title}
          onChange={handleInputChange}
          className="form-control"
        />
        <textarea
          name="content"
          placeholder="Content"
          value={newPost.content}
          onChange={handleInputChange}
          className="form-control"
        ></textarea>
        <button onClick={handleAddPost} className="btn btn-primary mt-2">Add Blog</button>
      </div>
      {blogPosts.map((post) => (
        <div key={post.id} className="mb-3">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {post.timestamp && <p>Created at: {post.timestamp}</p>} {/* Display timestamp */}
          <h3>Comments</h3>
          {post.comments && post.comments.length === 0 ? (
            <p>No comments yet.</p>
          ) : (
            <ul>
              {post.comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          )}
          <CommentForm onCommentSubmit={(comment) => handleCommentSubmit(post.id, comment)} />
          <Rating value={post.rating || 0} onChange={(newRating) => handleRatingChange(post.id, newRating)} />
          <LikeDislike
            likes={post.likes || 0}
            dislikes={post.dislikes || 0}
            onLike={() => handleLike(post.id)}
            onDislike={() => handleDislike(post.id)}
          />
          <button onClick={() => deletePost(post.id)} className="btn btn-danger">Delete</button>
          <button onClick={() => updatePost(post.id, { title: 'Updated Title', content: 'Updated Content' })} className="btn btn-primary">Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Blog;

