import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { InnerImageZoom } from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductDesc from "./components/ProductDesc";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";
import { supabase } from "../../config/supabase";
import Button from "../../components/Feature/Button";
import RelatedArticles from "../../components/Feature/RelatedArticles";
import ContactLg from "../../components/Contact/ContactLg";

export default function ProductDetail({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const {
    isLoading,
    isError,
    data: product,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => supabase.from("product").select(),

    select: (res) => res.data.find((e) => e.id == id),
  });

  const [pos, setPos] = useState(0);
  const handleImg = (index) => {
    setPos(index);
  };

  const handleCart = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    if (!cart.includes(id)) {
      localStorage.setItem("cart", JSON.stringify([...cart, id]));
      setCart([...cart, id]);

      Toast.fire({
        icon: "success",
        title: "Add product successfully",
      });
    } else {
      Toast.fire({
        icon: "error",
        title: "You've already had it in your cart",
      });
    }
  };

  if (isLoading) {
    return (
      <ClipLoader
        loading={isLoading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="lg:col-span-3 mx-auto"
      />
    );
  }
  return (
    <div className=" col-span-3 mt-10 ">
      <div className=" grid grid-cols-1  lg:grid-cols-2 gap-8">
        <div className="w-full [&_img]:w-full [&>figure>div>img]:w-full [&>figure>div>img]:h-[400px] [&_img]:object-cover">
          <InnerImageZoom
            // src={product.thumbnail_list[pos]}
            src={product.thumbnail}
            className="border-2 p-1 w-full"
          />

          <div className=" mt-4 w-full">
            <Swiper
              slidesPerView={4}
              spaceBetween={25}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {/* {product.thumbnail_list.map((imgUrl, index) => ( */}
              <SwiperSlide key={product.thumbnail}>
                <div
                  className="cursor-pointer border-2"
                  // onClick={() => handleImg(index)}
                  // className={` cursor-pointer border-2  ${
                  //   index === pos ? `border-blue-600` : `border-slate-200`
                  // } `}
                >
                  <img className="w-full" src={product.thumbnail} alt="" />
                </div>
              </SwiperSlide>
              {/* ))} */}
            </Swiper>
          </div>
        </div>

        <div className="flex flex-col gap-3 ">
          <h1 className=" text-[#003d79] font-bold text-[30px]">
            {product.title}
          </h1>
          <p className="text-[#141414] grow-1 leading-8 text-justify text-[20px]">
            {product.short_desc}
          </p>
          <div className=" flex gap-5">
            <Button
              onClick={() => {
                navigate("/inquiry");
              }}
            >
              Inquire
            </Button>
            <button
              type="submit"
              className="text-white bg-[#003d79] w-fit px-5 py-3 rounded-xl grow-0  transition hover:scale-110 hover:shadow-slate-400 hover:shadow-md active:scale-100"
              onClick={handleCart}
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>

      <ProductDesc long_desc={product.long_desc} />
      <ContactLg products={[id]} bgColor="#f0f0f0" setCart={setCart} />
      <RelatedArticles />
    </div>
  );
}
