import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import ContainerFluid from "../../../components/Layout/Container/ContainerFluid";

const bannerOptions = [
  "/images/Hero_vi/1611131227_banner-DVH.jpg",
  "/images/Hero_vi/1609310769_2.png",
  "/images/Hero_vi/1609298615_3.png",
  "/images/Hero_vi/1609298615_4.png",
  "/images/Hero_vi/1609298615_5.png",
];

const bannerOptions_en = [
  "/images/Hero_en/1616492431_banner-tieng-anh.jpg",
  "/images/Hero_en/1616494020_5.png",
  "/images/Hero_en/1616494020_6.png",
  "/images/Hero_en/1616494020_7.png",
  "/images/Hero_en/1616494020_8.png",
];

const Hero = ({ lang_code }) => {
  const banner = lang_code == "vi" ? bannerOptions : bannerOptions_en;

  return (
    <section className="mb-[90px] mt-[95px] xl:mt-0">
      <ContainerFluid>
        <Swiper
          spaceBetween={30}
          speed={2000}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="banner-swiper"
        >
          {banner.map((item) => (
            <SwiperSlide className="relative" key={item}>
              <img
                className="w-full h-full object-cover bg-left"
                src={item}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerFluid>
    </section>
  );
};

export default Hero;
