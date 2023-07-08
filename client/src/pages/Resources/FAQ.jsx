import { useTranslation } from "react-i18next";
import Header from "../../components/Feature/Header";
import Container from "../../components/Layout/Container/Container";
import FaqBody from "./components/FaqBody";
import Title from "./components/Title";

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <div>
      <Header imgUrl={"/images/background/faq.webp"} />
      <Container bgColor={"[#fff]"}>
        <Title text={"FAQ"} />
        <div className="mb-[88px] mt-4">
          <FaqBody question={t("faq_q1")} answer={t("faq_a1")} />
          <FaqBody question={t("faq_q2")} answer={t("faq_a2")} />
          <FaqBody
            question={t("faq_q3")}
            answer={t("faq_a3", { returnObjects: true }).map((item, index) => (
              <div key={index}>
                <span className="text-[#545454]">{t(`${item.line}`)}</span>
              </div>
            ))}
          />
        </div>
      </Container>
    </div>
  );
}
