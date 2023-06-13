import Header from "../../components/Feature/Header";
import Container from "../../components/Layout/Container/Container";
import GuideBody from "./components/GuideBody";
import Title from "./components/Title";

export default function Guide() {
  return (
    <div>
      <Header imgUrl={"/images/banner2.jpg"} />
      <Container bgColor={"[#f8f8f8]"}>
        <Title text={"Guide Download"} />
        <GuideBody />
      </Container>
    </div>
  );
}
