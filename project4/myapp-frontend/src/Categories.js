import React from "react";
import { Link } from "react-router-dom";
import blogData from "./blogData.json";
import "./App.css";

const categories = ["Programming", "Web Design"];

const Categories = () => {
  return (
    <div className="container">
      <h1>Categories</h1>
      <div className="category-list">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/category/${category}`}
            className="category-item"
          >
            {category}
          </Link>
        ))}
      </div>

      <div className="blog-list">
        {blogData.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} />
            <div className="content">
              <h3>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
