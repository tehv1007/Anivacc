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
import { supabase } from "../../config/supabase";
import Button from "../../components/Feature/Button";
import RelatedArticles from "../../components/Feature/RelatedArticles";
import ContactLg from "../../components/Contact/ContactLg";
import parse from "html-react-parser";
import SideBar from "./components/SideBar";
import GlobalSpinner from "../../components/Common/loading/GlobalSpinner";
import { useTranslation } from "react-i18next";

export default function ProductDetail({ cart, setCart, lang_code }) {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, data: product } = useQuery({
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
    if (!cart.some((product) => product.id == id)) {
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
      setCart([...cart, product]);
    } else {
      Toast.fire({
        icon: "error",
        title: t("cart_info"),
      });
    }
  };

  const navigateCart = () => {
    if (!cart.some((product) => product.id == id)) {
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
      setCart([...cart, product]);
      navigate("/inquiry");
    } else {
      navigate("/inquiry");
    }
  };

  return (
    <>
      {isLoading ? (
        <GlobalSpinner />
      ) : (
        <div className="w-full lg:grid lg:grid-cols-4 lg:gap-7">
          <div className=" col-span-3 mt-10 ">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="w-full [&_img]:w-full [&>figure>div>img]:w-full [&>figure>div>img]:h-[400px] [&_img]:object-cover">
                <InnerImageZoom
                  src={product.thumbnail[pos]}
                  // src={product.thumbnail}
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
                    {product.thumbnail.map((imgUrl, index) => (
                      <SwiperSlide key={index}>
                        <div
                          // className="cursor-pointer border-2"
                          onClick={() => handleImg(index)}
                          className={` cursor-pointer border-2  ${
                            index === pos
                              ? `border-blue-600`
                              : `border-slate-200`
                          } `}
                        >
                          <img className="w-full" src={imgUrl} alt="" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="flex flex-col gap-3 ">
                <h1 className=" text-[#003d79] font-bold text-[26px]">
                  {product.title}
                </h1>
                <div className="text-[#141414] grow-1 leading-6 text-justify text-[18px] tracking-normal">
                  {parse(product.short_desc)}
                </div>
                <div className=" flex gap-5">
                  <Button onClick={navigateCart}>{t("cart_inquire")}</Button>
                  <button
                    type="submit"
                    className="text-white bg-[#003d79] w-fit px-5 py-3 rounded-xl grow-0 transition hover:scale-110 hover:shadow-slate-400 hover:shadow-md active:scale-100"
                    onClick={handleCart}
                  >
                    {t("cart_action")}
                  </button>
                </div>
              </div>
            </div>
            <ProductDesc long_desc={product.long_desc} />
            <ContactLg
              products={JSON.parse(localStorage.getItem("cart"))}
              bgColor="bg-gray-200"
              setCart={setCart}
            />
            <RelatedArticles lang_code={lang_code} category="industry" />
          </div>

          {/* Sidebar */}
          <div className="col-span-1">
            <SideBar lang_code={lang_code} />
          </div>
        </div>
      )}
    </>
  );
}
