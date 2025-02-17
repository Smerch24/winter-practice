import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogData from "./blogData.json";
import "./App.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const filteredPosts = blogData
    .filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "date") return new Date(b.date) - new Date(a.date);
      if (sortType === "title") return a.title.localeCompare(b.title);
      return 0;
    });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container">
      <h1>Resources and insights</h1>
      <p>The latest industry news, interviews, technologies, and resources.</p>

      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-box"
        />
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="sort-options"
        >
          <option value="date">Sort by Date</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      <div className="blog-list">
        {currentPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} />
            <div className="content">
              <h3>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <div className="meta">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({
          length: Math.ceil(filteredPosts.length / postsPerPage),
        }).map((_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
