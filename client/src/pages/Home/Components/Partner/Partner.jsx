import PartnerItem from "./PartnerItem";
import ContainerFluid from "../../../../components/Layout/Container/ContainerFluid";
import Heading from "../../../../components/Common/Heading";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

export default function Partner() {
  const { t } = useTranslation();

  const partnerImagesUrl = [
    { url: "/images/partners/anivacc-logo.jpg", href: "https://anivacc.com/" },
    {
      url: "/images/partners/bewital-agri.jpg",
      href: "https://bewital-agri.de/en/",
    },
    {
      url: "/images/partners/cigb-banner.jpg",
      href: "https://www.cigb.edu.cu/en/",
    },
    { url: "/images/partners/Formosa.jpg", href: "http://www.formosabio.com/" },
    {
      url: "/images/partners/sinder.jpg",
      href: "https://www.sinderanimalhealth.com/",
    },
    {
      url: "/images/partners/Adwia-An-Do.webp",
      href: "https://adwia.com/Vet/",
    },
    {
      url: "/images/partners/ASP-My.webp",
      href: "https://www.asp-inc.com/",
    },
    {
      url: "/images/partners/Bioveta.webp",
      href: "https://www.bioveta.eu/en/",
    },
    {
      url: "/images/partners/Framelco-Ha-Lan.webp",
      href: "https://www.adisseo.com/en/adisseo-announces-closing-of-framelco-group-acquisition/",
    },
    {
      url: "/images/partners/Intercorp-An-Do-1.webp",
      href: "https://intercorp.in/",
    },
    {
      url: "/images/partners/LIPTOSA-TAY-BAN-NHA.webp",
      href: "https://liptosa.com/en/",
    },
    {
      url: "/images/partners/mavit-1.webp",
      href: "https://miavit.com/",
    },
    {
      url: "/images/partners/Veko-An-Do.webp",
      href: "https://vekocare.com/",
    },
    {
      url: "/images/partners/VET-SUPERIOR-CONSULTANT-THAI-LAN-1.webp",
      href: "https://www.vscthailand.com/",
    },
  ];

  return (
    <section className="mt-[62px]">
      <Heading title={t("home_partner")} />
      <ContainerFluid>
        <div className="px-[15px] py-[10px]">
          <Swiper
            modules={[Autoplay]}
            className="swiper-container !overflow-hidden"
            spaceBetween={20}
            speed={1000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={2}
            breakpoints={{
              1024: {
                slidesPerView: 7,
              },
              780: {
                slidesPerView: 5,
              },
              510: {
                slidesPerView: 3,
              },
            }}
          >
            {partnerImagesUrl.map((item, index) => (
              <SwiperSlide key={index}>
                <a href={item.href} target="_blank">
                  <img
                    className="w-full h-full object-contain bg-top "
                    key={index}
                    src={item.url}
                    alt={`partner-${index}`}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ContainerFluid>
    </section>
  );
}
