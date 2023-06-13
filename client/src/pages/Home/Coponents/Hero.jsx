import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import ContainerFluid from "../../../components/Layout/Container/ContainerFluid";

const bannerOptions = [
  "/images/1611131227_banner-DVH.jpg",
  "/images/1609310769_2.png",
  "/images/1609298615_3.png",
  "/images/1609298615_4.png",
  "/images/1609298615_5.png",
];

const Hero = () => {
  return (
    <section className="mb-[90px]">
      <ContainerFluid>
        <Swiper
          spaceBetween={30}
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
          {bannerOptions.map((item) => (
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
