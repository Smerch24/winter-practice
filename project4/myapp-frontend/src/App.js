import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import PostDetails from "./PostDetails";
import Navbar from "./Navbar";
import blogData from "./blogData.json";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={blogData} />} />
        <Route path="/categories" element={<Categories data={blogData} />} />
        <Route path="/post/:id" element={<PostDetails data={blogData} />} />
      </Routes>
    </Router>
  );
}

export default App;
