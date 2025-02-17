import "../../App.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <p>PORTFOLIO</p>
      <div className="content-1">
        <h1 className="portfolio--header">View Our Case Studies</h1>
        <p className="portfolio--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet
          posuere porta vitae mi accumsan. Ultricies mauris, hab
        </p>
        <button className="portfolio--button">
          VIEW ALL <code>--></code>
        </button>
      </div>
      <div>
        <ul className="portfolio-images">
          <li>
            <img
              src="images/badfdca42b6e0b298891c5657eb86594.jpeg"
              alt=""
              width="360px"
              height="480px"
            />
            <button className="portfolio-button">
              <code>-></code>
            </button>
          </li>
          <li>
            <img
              src="images/cf07795d6a55e33880ba5ba23ec1dda4.jpeg"
              alt=""
              width="360px"
              height="480px"
            />
            <button className="portfolio-button">
              <code>-></code>
            </button>
          </li>
          <li>
            <img
              src="images/03fd4911e048bc923833ef740165bc16.jpeg"
              alt=""
              width="360px"
              height="480px"
            />
            <button className="portfolio-button">
              <code>-></code>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
