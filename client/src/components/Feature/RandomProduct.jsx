import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { supabase } from "../../config/supabase";
import ArrowRight from "../../pages/Home/Components/arrows/ArrowRight";
import ArrowLeft from "../../pages/Home/Components/arrows/ArrowLeft";
import GlobalSpinner from "../Common/loading/GlobalSpinner";
import { useTranslation } from "react-i18next";

export default function RandomProduct({ lang_code }) {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const handleResize = () => setWidthScreen(window.innerWidth);
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [widthScreen]);

  const { isLoading, data: products } = useQuery({
    queryKey: ["products", { lang_code }],
    queryFn: () => supabase.from("product").select().eq("lang_code", lang_code),

    select: (res) => res.data,
  });

  return (
    <div className="mt-5">
      <h3 className="text-2xl font-bold text-[#003d79]">
        {t("random_products")}
      </h3>
      {isLoading ? (
        <GlobalSpinner />
      ) : (
        <div className="product-slider w-[calc(100%-80px)] mx-auto relative z-[1] mt-10 mb-[62px]">
          <div className="swiper-button image-swiper-button-next">
            <ArrowRight className="w-[14px] h-[14px]" />
          </div>
          <div className="swiper-button image-swiper-button-prev">
            <ArrowLeft className="w-[14px] h-[14px]" />
          </div>
          <Swiper
            slidesPerView={
              widthScreen >= 600 ? (widthScreen >= 1000 ? 5 : 3) : 2
            }
            spaceBetween={25}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper w-full swiper-container"
          >
            {products.map((product) => (
              <SwiperSlide key={product.thumbnail}>
                <Link to={`/products/${product.id}`}>
                  <img src={product.thumbnail} alt="" />
                  <p className="line-clamp-2">{product.title}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
