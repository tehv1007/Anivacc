import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Container from "../../components/Layout/Container/Container";
import RandomProduct from "../../components/Feature/RandomProduct";
import Header from "../../components/Feature/Header";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import classnames from "classnames";
import parser from "html-react-parser";
import GlobalSpinner from "../../components/Common/loading/GlobalSpinner";
import { useGetSolutionsByType } from "../../hooks/useSolution";
import { solutionCategory } from "../../utils/categories";

export default function Solutions({ lang_code }) {
  const { solutionId } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [typeId, setTypeId] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(
    "Chẩn đoán xét nghiệm bệnh động vật"
  );

  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const handleResize = () => setWidthScreen(window.innerWidth);

  const handlePostClick = (post) => {
    navigate(`/solution/${post.id}`, { state: { post } });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [widthScreen]);

  useEffect(() => {
    setSelectedCategory(solutionId);
  }, [solutionId]);

  const { data: solutionPosts, isLoading: solutionPostsLoading } =
    useGetSolutionsByType(solutionId, lang_code);

  const handleCategoryClick = (link) => {
    setSelectedCategory(link);
    const category = solutionCategory.find((cat) => cat.link === link);
    if (category) {
      const typeId = category.id;
      setTypeId(typeId);
      navigate(`/solutions/${link}`);
    }
  };

  // if (solutionPostsLoading) return <div></div>;
  // console.log(solutionPosts);

  return (
    <>
      <Header imgUrl={"/images/background/header2.jpg"} />
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 ">
          <h1 className="text-3xl font-bold text-[#003d79]">
            {t("solutions_heading")}
          </h1>
          <p className="text-center">{t("solutions_intro")}</p>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-5">
            {t("solutions-arr", { returnObjects: true }).map(
              (solutionCategory, index) => {
                const { link, solution } = solutionCategory;
                const categoryClassName = classnames(
                  "bg-[#eee] max-w-[200px] text-center p-3 flex justify-center items-center cursor-pointer hover:bg-[#003d79] hover:text-white transition hover:transition active:bg-[#eee] active:text-black",
                  {
                    "bg-blue-900 text-white": selectedCategory === link,
                  }
                );

                return (
                  <div
                    key={index}
                    onClick={() => handleCategoryClick(link)}
                    className={categoryClassName}
                  >
                    <p>{solution}</p>
                  </div>
                );
              }
            )}
          </div>
          <Swiper
            slidesPerView={
              widthScreen >= 600 ? (widthScreen >= 1000 ? 3 : 2) : 1
            }
            spaceBetween={0}
            // pagination={{
            //   type: "fraction",
            // }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper w-full"
          >
            {/* {solutionPostQueries.some((query) => query.isLoading) ? (
              <GlobalSpinner />
            ) : (
              solutionPostQueries */}
            {solutionPostsLoading ? (
              <GlobalSpinner />
            ) : (
              solutionPosts.map((post, index) => {
                {
                  /* solutionPostQueries
                .map((query) => query.data.data)
                [typeId - 1].map((post, index) => { */
                }
                return (
                  <SwiperSlide key={index} className="overflow-visible p-5">
                    <div
                      onClick={() => handlePostClick(post)}
                      className="group [&>div]:hover:transition-all [&>div]:hover:duration-[0.5s] [&>div]:duration-[0.5s] [&>div]:transition-all cursor-pointer border-2 border-slate-200 h-[400px] relative rounded-lg overflow-hidden transition-all hover:transition-all  hover:shadow-xl hover:drop-shadow-xl hover:scale-105 hover:translate-y-[-10px]"
                    >
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        // src={getRandomImage()}
                        src={post.thumbnail}
                        alt=""
                      />
                      <p className="group-hover:opacity-0 bg-gray-600/50 transition-all opacity-100 group-hover:transition-all group:hover:duration-[2s] duration-[2s] text-[25px] font-bold absolute z-20 bottom-0 text-white p-5">
                        {post.title}
                      </p>
                      <div className="absolute w-full h-full bg-black/0 top-0 group-hover:bg-black/60 "></div>
                      <div className="bg-[#003d79] absolute px-7 py-5 bottom-0 right-0 z-40 hidden group-hover:block text-white hover:bg-blue-600">
                        <i className="fa-solid fa-chevron-right text-2xl "></i>
                      </div>
                      <div className="absolute top-[100%] group-hover:top-[0] p-5 text-white">
                        <div className="text-[25px] font-bold">
                          {/* {post.title.rendered} */}
                          {post.title}
                        </div>
                        <div className="w-1 h-[30px] cursor-pointer"></div>
                        {/* <div>{parser(post.excerpt.rendered)}</div> */}
                        <div>{parser(post.description)}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>
        </div>
        <RandomProduct lang_code={lang_code} />
      </Container>
    </>
  );
}
