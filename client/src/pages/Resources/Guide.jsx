import { useTranslation } from "react-i18next";
import Header from "../../components/Feature/Header";
import Container from "../../components/Layout/Container/Container";
import GuideBody from "./components/GuideBody";
import Title from "./components/Title";

export default function Guide() {
  const { t } = useTranslation();
  return (
    <div>
      <Header imgUrl={"/images/background/stock_08.jpg"} />
      <Container bgColor={"[#fff]"}>
        <Title text={t("guide")} />
        <GuideBody />
      </Container>
    </div>
  );
}
