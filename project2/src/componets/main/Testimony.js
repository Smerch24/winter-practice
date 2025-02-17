import "../../App.css";

function Testimony() {
  return (
    <div className="testimony">
      <p>Testimony</p>
      <h1 className="testimony--header">What Do Our Clients Says About Us</h1>
      <div className="main-avatar">
        <img
          src="images/Image.jpg"
          alt=" Main Testimonial"
          height="100px"
          width="100px"
        />
        <div className="gradient-bg"></div>
      </div>
      <p className="testimony--description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper
        mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id
        tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra
        etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.
      </p>
      <p className="client-name">JAMES JOKOVIC</p>
      <p className="client-role">IT CONSULTANT</p>

      <div className="pagination">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      <div className="avatars">
        <img className="client--1" src="images/1c.jpeg" alt="Client 1" />
        <img className="client--2" src="images/2c.jpeg" alt="Client 2" />
        <img className="client--3" src="images/3c.jpeg" alt="Client 3" />
        <img className="client--4" src="images/4c.jpeg" alt="Client 4" />
        <img className="client--5" src="images/5c.jpeg" alt="Client 5" />
        <img className="client--6" src="images/6c.jpeg" alt="Client 6" />
      </div>
    </div>
  );
}

export default Testimony;
