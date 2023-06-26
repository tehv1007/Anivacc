import ProductOffer from "./Components/ProductOffer";
import About from "./Components/About";
import Services from "./Components/Services";
import Certificate from "./Components/Certificate";
import InformationCenter from "./Components/InformationCenter";
import Solution from "./Components/Solution";
import Hero from "./Components/Hero";
import Partner from "./Components/Partner/Partner";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Hero />
      <ProductOffer />
      <Solution />
      <About />
      <Services />
      <Certificate />
      <InformationCenter />
      <Partner />
    </div>
  );
};

export default Home;
