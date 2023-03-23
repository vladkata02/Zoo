import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Posts</h1>
      <div className="row mt-3">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-3">
            <Card>
              <Card.Img variant="top" src={`https://picsum.photos/id/${post.id + 10}/400/300`} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
