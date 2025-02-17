import "../../App.css";
import About from "./About";
import Banner from "./Banner";
import Content from "./Content";
import Icons from "./Icons";
import News from "./News";
import Portfolio from "./Portfolio";
import Testimony from "./Testimony";

function Main() {
  return (
    <main>
      <div>
        <Content />
        <Icons />
        <About />
        <Portfolio />
        <Testimony />
        <News />
        <Banner />
      </div>
    </main>
  );
}

export default Main;
