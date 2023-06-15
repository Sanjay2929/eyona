import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Passion from "./components/Passion";
import Experts from "./components/Experts";
import Products from "./components/Products";
import Relationship from "./components/Relationship";
import Contact from "./components/Contact";
import Magic from "./components/Magic";
import ManagementTeam from "./components/ManagementTeam";
import JoinTeam from "./components/JoinTeam";
import FooterSec from "./components/FooterSec";
import Preloader from "./components/Preloader";

function App() {
  return (
    <div className="overflow-hidden">
      <Preloader />
      <HeroSection />
      <Passion />
      <Experts />
      <Products />
      <Relationship />
      <Contact />
      <Magic />
      <ManagementTeam />
      <JoinTeam />
      <FooterSec />
    </div>
  );
}

export default App;
