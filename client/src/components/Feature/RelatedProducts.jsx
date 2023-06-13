import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, EffectCube, Pagination } from "swiper";
import "swiper/css";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../config/supabase";

export default function RelatedProducts() {
  const {
    isLoading,
    isError,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => supabase.from("product").select(),

    select: (res) => res.data,
  });

  if (isLoading || isError) {
    return <></>;
  }
  return (
    <div>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        autoplay={{
          delay: 3000,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        {products.map((product, index) => {
          if (index <= 3) {
            return (
              <SwiperSlide key={index}>
                <img src={product.thumbnail} alt="" />
                <Link
                  to={`/products/${product.id}`}
                  className="absolute z-40 w-7 h-7 top-3 right-2 bg-blue-500 flex justify-center items-center "
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-white p-2 "></i>
                </Link>
                <p className="absolute bottom-[10%] w-full text-center text-lg line-clamp-1 ">
                  {product.title}
                </p>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
}
