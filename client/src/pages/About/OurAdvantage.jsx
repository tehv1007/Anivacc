import Header from "../../components/Feature/Header";
import Container from "../../components/Layout/Container/Container";
import AdvantageBody from "./components/AdvantageBody";

export default function OurAdvantage() {
  return (
    <div>
      <Header imgUrl={"/images/background/products-bg.webp"} />
      <Container>
        <AdvantageBody />
      </Container>
    </div>
  );
}
