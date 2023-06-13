import Header from "../../components/Feature/Header";
import Container from "../../components/Layout/Container/Container";
import AdvantageBody from "./components/AdvantageBody";

export default function OurAdvantage() {
  return (
    <div>
      <Header imgUrl={"/images/index_main_im01.jpg"} />
      <Container>
        <AdvantageBody />
      </Container>
    </div>
  );
}
