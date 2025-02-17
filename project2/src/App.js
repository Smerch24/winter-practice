import "./App.css";
import Logo from "./componets/header/Logo.js";
import Navigation from "./componets/header/Navigation.js";
import Footer from "./componets/footer/Footer.js";
import Main from "./componets/main/Main.js";

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <header>
        <Logo />
        <Navigation />
      </header>

      {/* MAIN */}
      <Main />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
