import "../../App.css";

function News() {
  return (
    <div className="news">
      <p className="news--title">BLOG</p>

      <h1 className="news--header">Read OurNews</h1>
      <ul>
        <li>
          <img
            src="images/35cc5784852bebc7580851ad8ee54551.jpeg"
            alt="Photo#1"
            width="361px"
            height="241px"
          />
          <div className="content--1">
            <p className="news---date">09 April,2022</p>
            <p className="news--author">by Admin</p>
          </div>
          <p className="news--description">
            Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam
          </p>
          <button className="news--button">Read More</button>
        </li>
        <li>
          <img
            src="images/96abb168d6f31d77274a00091ddc0aee.jpeg"
            alt="Photo#2"
            width="361px"
            height="241px"
          />
          <div className="content--1">
            <p className="news---date">09 April,2022</p>
            <p className="news--author">by Admin</p>
          </div>
          <p className="news--description">
            Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam
          </p>
          <button className="news--button">Read More</button>
        </li>
        <li>
          <img
            src="images/c1a4059b289b83ea1ec189d92002432c.jpeg"
            alt="Photo#3"
            width="361px"
            height="241px"
          />
          <div className="content--1">
            <p className="news---date">09 April,2022</p>
            <p className="news--author">by Admin</p>
          </div>
          <p className="news--description">
            Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam
          </p>
          <button className="news--button">Read More</button>
        </li>
      </ul>
    </div>
  );
}

export default News;
