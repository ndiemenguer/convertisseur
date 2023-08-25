import React, { useState, useEffect } from 'react';

const Post = ({ title, body }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('erreur du posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Liste des Posts</h2>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

const Exo3 = () => {
  return (
    <div>
      <PostList />
    </div>
  );
};

export  default  Exo3;