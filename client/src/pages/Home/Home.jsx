import ProductOffer from "./Coponents/ProductOffer";
import About from "./Coponents/About";
import Services from "./Coponents/Services";
import Certificate from "./Coponents/Certificate";
import InformationCenter from "./Coponents/InformationCenter";
import Solution from "./Coponents/Solution";
import OnlineService from "../../components/Layout/FixComponent/OnlineService";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <ProductOffer />
      <Solution />
      <About />
      <Services />
      <Certificate />
      <InformationCenter />
      <OnlineService/>
    </div>
  );
};

export default Home;
