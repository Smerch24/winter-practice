import AboutBox from "./AboutBox";
import ContactBox from "./ContactBox";
import MediaBox from "./MediaBox";
import Logo from "../header/Logo";
import "../../App.css";

function Footer() {
  return (
    <>
      <Logo />
      <footer>
        <ul>
          <ContactBox />
          <AboutBox />
          <MediaBox />
        </ul>
      </footer>
    </>
  );
}

export default Footer;
