
import { useParams } from 'react-router-dom';
import "./Post.css"

const Post = () => {
  const { id } = useParams();

  // Simulated blog post data
  const blogPost = {
    1: {
      title: 'Blog Post 1',
      content: 'This is the content of Blog Post 1.',
    },
    2: {
      title: 'Blog Post 2',
      content: 'This is the content of Blog Post 2.',
    },
    3: {
      title: 'Blog Post 3',
      content: 'This is the content of Blog Post 3.',
    },
  };

  const post = blogPost[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
