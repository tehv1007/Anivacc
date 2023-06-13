import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../config/supabase";
export default function RelatedArticles() {
  const {
    isLoading,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => supabase.from("posts").select(),

    select: (res) => res.data,
  });

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div className="">
      <div className="font-bold text-3xl border-b-2 my-10 pb-4 ">
        <h3>Related Articles</h3>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        pagination={{
          type: "fraction",
        }}
        autoplay={{
          delay: 3000,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[280px]"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.thumbnail} className="border-2 h-full">
            <Link to={`/post/${post.id}`} className=" h-full ">
              <img
                className="w-full h-[200px] object-cover "
                src={post.thumbnail}
                alt=""
              />
              <p className=" line-clamp-2 m-3 ">
                {post.title}
                <br />
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
