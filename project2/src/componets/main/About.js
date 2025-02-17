import "../../App.css";

function About() {
  return (
    <div className="about">
      <div className="content--1">
        <img
          src="images/e81bfd1a579ce4fd6ab41663c298bde0.jpeg"
          alt=""
          width="470px"
          height="500px"
        />
        <p className="about--title">ABOUT US</p>
        <h1 className="about--header">Design & Develop For Better Solution</h1>
      </div>
      <p className="about--text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet
        posuere porta vitae mi accumsan. Ultricies mauris, habitasse nec mauris
        sagittis imperdiet lobortis porttitor. Ipsum mi sed uta aliquet ut.
        Turpis viverra volutpat sed eu porta morbi egesta ut hac rutrum ut augue
        vitae, nec, ut. Nibh nibh quam
      </p>
      <button className="about--button">Learn More</button>
    </div>
  );
}

export default About;
