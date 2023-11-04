import { useTranslation } from "react-i18next";
import Container from "../../../components/Layout/Container/Container";
import AdvantageImage from "./AdvantageImage";

export default function AdvantageBody() {
  const { t } = useTranslation();

  return (
    <div className="shadow-[0_0px_25px_6px_rgba(0,0,0,0.1)] relative rounded-md mb-5">
      <div className="min-[1220px]:h-[390px] absolute -translate-y-1/2 w-full">
        <AdvantageImage />
      </div>
      <Container>
        <div className="mt-[271px]">
          <ul className="list-disc list-outside px-[40px] text-sm text-black pt-[215px] pb-[43px] font-poppins leading-8">
            <li className="mb-5">
              <p className="font-semibold inline text-base">
                {t("advantage_header1")}
              </p>
              <p>{t("advantage_content1")}</p>
            </li>
            <li className="mb-5">
              <p className="font-semibold inline text-base">
                {t("advantage_header2")}
              </p>
              <p>{t("advantage_content2")}</p>
            </li>
            <li className="mb-5">
              <p className="font-semibold inline text-base">
                {t("advantage_header3")}
              </p>
              <p>{t("advantage_content3")}</p>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-5 pr-10">
          <div className="max-w-full h-auto">
            <img
              className="object-cover block"
              src="/images/others/chung-nhan-iso-scaled.jpg"
              alt="Chứng nhận ISO công ty CNC"
            />
          </div>
          <div className="max-w-full h-auto">
            <img
              className="object-cover block"
              src="/images/others/WHO-GMP_certificate.png"
              alt="Chứng nhận WHO-GMP công ty CNC"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
