import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../config/supabase";
import GlobalSpinner from "../Common/loading/GlobalSpinner";
import { useTranslation } from "react-i18next";

export default function RelatedArticles({ lang_code, category }) {
  const { t } = useTranslation();

  const { isLoading, data: posts } = useQuery({
    queryKey: ["posts", { lang_code }],
    queryFn: () =>
      supabase
        .from("posts")
        .select()
        .eq("lang_code", lang_code)
        .eq("category", category),

    select: (res) => res.data,
  });

  return (
    <div className="product-slider">
      <div className="font-bold text-3xl border-b-2 my-10 pb-4">
        <h3>{t("related_articles")}</h3>
      </div>
      {isLoading ? (
        <GlobalSpinner />
      ) : (
        <Swiper
          spaceBetween={25}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            510: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          className="swiper-container !overflow-hidden"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.thumbnail} className="border-2 h-full">
              <Link to={`/posts/${post.id}`} className=" h-full ">
                <img
                  className="w-full h-[200px] object-cover "
                  src={post.thumbnail}
                  alt=""
                />
                <p className=" line-clamp-2 m-3 h-[48px]">
                  {post.title}
                  <br />
                </p>
              </Link>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination !relative !bottom-0 mt-5"></div>
        </Swiper>
      )}
    </div>
  );
}
