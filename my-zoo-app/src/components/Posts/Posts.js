import { Card } from 'react-bootstrap';
import { usePostContext } from "../../contexts/PostContext";
import { Link } from 'react-router-dom';
import './Posts.css'

export const Posts =  () => {
  const { posts } = usePostContext();
  return (
    <div className="container mt-5">
      <h1>Posts</h1>
      <div className="row mt-3">
        {posts.map((post) => (
          <div key={post._id} className="col-md-4 mb-3">
            <Card>
              <Card.Img variant="top" className="itemImage" src={post.imageUrl} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Link className='btn btn-success' to={`/posts/${post._id}`} >Read More</Link>
              </Card.Body>
            </Card>
          </div>
        ))}
        {posts.length === 0 && (
                <h3>No posts yet</h3>
        )}
      </div>
    </div>
  );
};
