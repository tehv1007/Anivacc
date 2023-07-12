import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../config/supabase";
import GlobalSpinner from "../Common/loading/GlobalSpinner";
import { useTranslation } from "react-i18next";

export default function RelatedProducts({ lang_code }) {
  const { t } = useTranslation();

  const { isLoading, data: products } = useQuery({
    queryKey: ["products", { lang_code }],
    queryFn: () => supabase.from("product").select().eq("lang_code", lang_code),

    select: (res) => res.data,
  });

  return (
    <section className="mt-5">
      <h3 className="text-2xl text-center font-bold text-[#003d79]">
        {t("related_products")}
      </h3>
      <div className="product-slider border">
        {isLoading ? (
          <GlobalSpinner />
        ) : (
          <Swiper
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            breakpoints={{
              510: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              990: {
                slidesPerView: 1,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="swiper-container !overflow-hidden"
          >
            {products.map((product, index) => {
              if (index <= 3) {
                return (
                  <SwiperSlide key={index}>
                    <Link
                      to={`/products/${product.id}`}
                      // className="absolute z-40 w-7 h-7 top-3 right-2 bg-blue-500 flex justify-center items-center "
                    >
                      <img src={product.thumbnail} alt="" />
                      {/* <i className="fa-solid fa-arrow-up-right-from-square text-white p-2 "></i> */}
                    </Link>
                    <p className="w-full text-center text-base line-clamp-2 px-1">
                      {product.title}
                    </p>
                  </SwiperSlide>
                );
              }
            })}
            <div className="swiper-pagination !relative !bottom-0 mt-5"></div>
          </Swiper>
        )}
      </div>
    </section>
  );
}
