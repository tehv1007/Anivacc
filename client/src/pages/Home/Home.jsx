import ProductOffer from "./Coponents/ProductOffer";
import About from "./Coponents/About";
import Services from "./Coponents/Services";
import Certificate from "./Coponents/Certificate";
import InformationCenter from "./Coponents/InformationCenter";
import Solution from "./Coponents/Solution";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <ProductOffer />
      <Solution />
      <About />
      <Services />
      <Certificate />
      <InformationCenter />
    </div>
  );
};

export default Home;
