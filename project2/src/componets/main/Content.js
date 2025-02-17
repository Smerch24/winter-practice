import "../../App.css";

function Content() {
  return (
    <div className="content">
      <div className="content--strings">
        <p className="content--title">Creative work, creative mind</p>
        <h1 className="content--header">We Are Digital Creative Agency</h1>
        <p className="content--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi sed
          metus id et viverra augue.
        </p>
        <button className="btn">Get in Touch</button>
      </div>

      <div className="content--image-container">
        <img
          className="content--image"
          src="images/bb0e4c4fe9123d0ea91899579cbd3abb.jpeg"
          alt="photo#1"
          width="400"
          height="550"
        />
        <img
          className="content--image"
          src="images/e3abb75ec0b8e2bef7d0616ac33ff6f0.jpg"
          alt="photo#2"
          width="150"
          height="550"
        />
      </div>
    </div>
  );
}

export default Content;
