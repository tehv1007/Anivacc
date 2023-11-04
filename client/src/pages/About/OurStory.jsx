import Header from "../../components/Feature/Header";
import Container from "../../components/Layout/Container/Container";
import ContainerFluid from "../../components/Layout/Container/ContainerFluid";
import History from "./components/History";
import StoryBody from "./components/StoryBody";

export default function OurStory() {
  return (
    <div>
      <Header imgUrl={"/images/background/large-bg.jpg"} />
      <Container>
        <StoryBody />
      </Container>
      {/* <ContainerFluid>
        <div className="bg-gray-200 pt-[50px] px-[30px] ">
          <Container>
            <History />
          </Container>
        </div>
      </ContainerFluid> */}
    </div>
  );
}
