import Header from "../../components/Feature/Header";
import Container from "../../components/Layout/Container/Container";
import History from "./components/History";
import StoryBody from "./components/StoryBody";

export default function OurStory() {
  return (
    <div>
      <Header imgUrl={"/images/background/large-bg.jpg"} />
      <Container>
        <StoryBody />
        <div className="bg-[#f8f8f8] pt-[50px] px-[30px]">
          <History />
        </div>
      </Container>
    </div>
  );
}
