import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { supabase } from "../../config/supabase";

export default function RandomProduct() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const handleResize = () => setWidthScreen(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [widthScreen]);
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

  if (isLoading || isError) return "";

  return (
    <div className="mt-5">
      <h3 className="text-3xl font-bold text-[#003d79]">Random Products</h3>
      <Swiper
        slidesPerView={widthScreen >= 600 ? (widthScreen >= 1000 ? 5 : 3) : 2}
        spaceBetween={25}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full"
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
  );
}
