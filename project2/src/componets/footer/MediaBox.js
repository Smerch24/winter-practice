import React from "react";
import "../../App.css";

function MediaBox() {
  return (
    <li>
      <div className="media-box">
        <h1>Subscribe</h1>

        <input type="text" placeholder="Your Email" />

        <h1>Follow Us</h1>
        <div className="media-icons">
          <ul>
            <li>
              <i className="fa-brands fa-square-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-square-instagram"></i>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
}
export default MediaBox;
