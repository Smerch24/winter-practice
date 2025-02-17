import React from "react";
import { useParams } from "react-router-dom";
import blogData from "./blogData.json";
import "./App.css";

const PostDetails = () => {
  const { id } = useParams();
  const post = blogData.find((post) => post.id === parseInt(id));

  if (!post) return <h2>Post not found</h2>;

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p className="meta">
        By {post.author} | {post.date}
      </p>
      <img src={post.image} alt={post.title} className="post-image" />
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetails;
