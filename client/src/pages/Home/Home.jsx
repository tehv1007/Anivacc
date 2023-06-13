import ProductOffer from "./Coponents/ProductOffer";
import About from "./Coponents/About";
import Services from "./Coponents/Services";
import Certificate from "./Coponents/Certificate";
import InformationCenter from "./Coponents/InformationCenter";
import Solution from "./Coponents/Solution";
import Hero from "./Coponents/Hero";
import Partner from "./Coponents/Partner/Partner";

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
