import Heading from "../../../components/Common/Heading";
import LearnMore from "./LearnMore";
import { useTranslation } from "react-i18next";

const ServiceItem = ({ title, icon }) => {
  return (
    <div className="py-[10px] lg:w-1/6 float-left">
      <div className="text-gray-700 leading-7 text-center">
        <span className="bg-transparent w-[90px] h-[90px] inline-block border border-white rounded-full rotateY">
          <i
            aria-hidden="true"
            className={`${icon} text-white leading-[88px] text-[44px]`}
          />
        </span>
      </div>
      <div className="pb-5">
        <div className="text-white leading-7 text-center pt-4 capitalize">
          <div className="">{title}</div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-blue-900 bg-cover bg-[url('/images/background/service-bg.webp')] bg-[50% 50%]">
      <div className="max-w-[1700px] mx-auto px-[10px] md:px-5 xl:px-10">
        <div className="py-[62px]">
          <div className="pb-5">
            <Heading title={t("home_service_heading")} text="text-white" />
          </div>
          <div className="flex flex-col lg:flex-row mt-[30px]">
            <div className="lg:w-1/12" />
            <ServiceItem
              title={t("home_service_cate1")}
              icon="font-icon fa fa-cube"
            />
            <ServiceItem
              title={t("home_service_cate2")}
              icon="fa-regular fa-handshake"
            />
            <ServiceItem
              title={t("home_service_cate3")}
              icon="fa-solid fa-headset"
            />
            <ServiceItem
              title={t("home_service_cate4")}
              icon="fa-solid fa-vial-virus"
            />
            <ServiceItem
              title={t("home_service_cate5")}
              icon="font-icon fa fa-tags"
            />
            <div className="lg:w-1/12" />
          </div>
          <LearnMore
            type="service"
            bgColor="bg-transparent"
            borderColor="border border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
