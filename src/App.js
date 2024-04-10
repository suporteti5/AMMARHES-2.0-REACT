/* CSS GLOBAL */
import "./Global.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Components */
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Location from "./Components/Location";
import ScrollButton from "./Components/ScrollButton";
import OtherServices from "./Components/OtherServices";

function App() {
  return (
    <>
      <header>
        <Home />
      </header>
      <main>
        <div id="about"></div>
        <About />
        <div id="services-section"></div>
        <Services />
        <OtherServices />
        <div id="Location-h3"></div>
        <Location />
        <div id="contact-section"></div>
        <Contact />
      </main>
      <ScrollButton />
      <Footer />
    </>
  );
}

export default App;
